'use client'

export default function OceanEffects() {

  return (
    <>
      {/* Minimal Ocean Elements Only */}
      <div className="fixed inset-0 pointer-events-none z-5 overflow-hidden">
        {/* Subtle Seaweed */}
        <div className="absolute bottom-0 left-8 w-3 h-24 bg-gradient-to-t from-green-600 to-green-400 rounded-t-full seaweed-animation opacity-20" />
        <div className="absolute bottom-0 right-12 w-2 h-20 bg-gradient-to-t from-green-700 to-green-500 rounded-t-full seaweed-animation opacity-15" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-0 left-1/3 w-4 h-32 bg-gradient-to-t from-green-800 to-green-600 rounded-t-full seaweed-animation opacity-10" style={{ animationDelay: '2s' }} />
      </div>
    </>
  )
}