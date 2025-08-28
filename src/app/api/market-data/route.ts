import { NextResponse } from 'next/server'

const CONTRACT_ADDRESS = '9MiHNzyMpykRWfM2hb5eUYJYVj9yb3v6LTj6Xwr3pump'
const TARGET_MARKET_CAP = 25000000 // $25M target

export async function GET() {
  try {
    // Fetch data from DexScreener API
    const response = await fetch(
      `https://api.dexscreener.com/latest/dex/tokens/${CONTRACT_ADDRESS}`,
      {
        headers: {
          'Accept': 'application/json',
        },
        next: { revalidate: 30 } // Cache for 30 seconds
      }
    )

    if (!response.ok) {
      throw new Error(`DexScreener API error: ${response.status}`)
    }

    const data = await response.json()
    
    // Find the first pair with market cap data (usually the most liquid pair)
    const pair = data.pairs?.find((p: any) => p.fdv || p.marketCap) || data.pairs?.[0]
    
    if (!pair) {
      // Return fallback data if no pairs found
      return NextResponse.json({
        current: 0,
        target: TARGET_MARKET_CAP,
        percentage: 0,
        status: 'no_data',
        price: '0',
        priceChange24h: 0,
        volume24h: 0,
        liquidity: 0,
        lastUpdated: new Date().toISOString()
      })
    }

    // Extract market data
    const currentMarketCap = pair.fdv || pair.marketCap || 0
    const percentage = (currentMarketCap / TARGET_MARKET_CAP) * 100
    const price = pair.priceUsd || '0'
    const priceChange24h = pair.priceChange?.h24 || 0
    const volume24h = pair.volume?.h24 || 0
    const liquidity = pair.liquidity?.usd || 0

    const marketData = {
      current: currentMarketCap,
      target: TARGET_MARKET_CAP,
      percentage: Math.min(percentage, 100), // Cap at 100%
      status: 'live',
      price: price,
      priceChange24h: priceChange24h,
      volume24h: volume24h,
      liquidity: liquidity,
      pairAddress: pair.pairAddress,
      dexId: pair.dexId,
      lastUpdated: new Date().toISOString()
    }

    return NextResponse.json(marketData)

  } catch (error) {
    console.error('Market data fetch error:', error)
    
    // Return fallback data on error
    return NextResponse.json({
      current: 0,
      target: TARGET_MARKET_CAP,
      percentage: 0,
      status: 'error',
      price: '0',
      priceChange24h: 0,
      volume24h: 0,
      liquidity: 0,
      error: 'Failed to fetch market data',
      lastUpdated: new Date().toISOString()
    })
  }
}