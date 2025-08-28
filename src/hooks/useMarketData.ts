import { useState, useEffect, useCallback } from 'react'

export interface MarketData {
  current: number
  target: number
  percentage: number
  status: 'loading' | 'live' | 'error' | 'no_data'
  price: string
  priceChange24h: number
  volume24h: number
  liquidity: number
  pairAddress?: string
  dexId?: string
  error?: string
  lastUpdated: string
}

const REFRESH_INTERVAL = 30000 // 30 seconds
const RETRY_INTERVAL = 5000 // 5 seconds for retries

export function useMarketData() {
  const [marketData, setMarketData] = useState<MarketData>({
    current: 0,
    target: 25000000,
    percentage: 0,
    status: 'loading',
    price: '0',
    priceChange24h: 0,
    volume24h: 0,
    liquidity: 0,
    lastUpdated: new Date().toISOString()
  })

  const [isLoading, setIsLoading] = useState(true)
  const [retryCount, setRetryCount] = useState(0)

  const fetchMarketData = useCallback(async () => {
    try {
      const response = await fetch('/api/market-data', {
        cache: 'no-store',
        headers: {
          'Cache-Control': 'no-cache',
        },
      })
      
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`)
      }

      const data: MarketData = await response.json()
      
      setMarketData(data)
      setIsLoading(false)
      setRetryCount(0)

    } catch (error) {
      console.error('Failed to fetch market data:', error)
      
      // Update status to error but keep existing data if available
      setMarketData(prev => ({
        ...prev,
        status: 'error',
        error: error instanceof Error ? error.message : 'Unknown error',
        lastUpdated: new Date().toISOString()
      }))
      
      setIsLoading(false)
      setRetryCount(prev => prev + 1)
    }
  }, [])

  // Initial fetch
  useEffect(() => {
    fetchMarketData()
  }, [fetchMarketData])

  // Set up refresh interval
  useEffect(() => {
    const interval = setInterval(() => {
      fetchMarketData()
    }, marketData.status === 'error' && retryCount < 3 ? RETRY_INTERVAL : REFRESH_INTERVAL)

    return () => clearInterval(interval)
  }, [fetchMarketData, marketData.status, retryCount])

  // Format market cap for display
  const formatMarketCap = useCallback((value: number) => {
    if (value >= 1000000) {
      return `$${(value / 1000000).toFixed(1)}M`
    } else if (value >= 1000) {
      return `$${(value / 1000).toFixed(0)}K`
    } else {
      return `$${value.toFixed(0)}`
    }
  }, [])

  // Format price for display
  const formatPrice = useCallback((price: string) => {
    const numPrice = parseFloat(price)
    if (numPrice < 0.001) {
      return `$${numPrice.toExponential(2)}`
    } else if (numPrice < 1) {
      return `$${numPrice.toFixed(6)}`
    } else {
      return `$${numPrice.toFixed(4)}`
    }
  }, [])

  // Format volume/liquidity for display
  const formatCurrency = useCallback((value: number) => {
    if (value >= 1000000) {
      return `$${(value / 1000000).toFixed(1)}M`
    } else if (value >= 1000) {
      return `$${(value / 1000).toFixed(0)}K`
    } else {
      return `$${value.toFixed(0)}`
    }
  }, [])

  return {
    marketData,
    isLoading,
    refreshData: fetchMarketData,
    formatMarketCap,
    formatPrice,
    formatCurrency,
  }
}