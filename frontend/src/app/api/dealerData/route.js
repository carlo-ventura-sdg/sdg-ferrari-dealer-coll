// app/api/dealerData/route.ts
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const res = await fetch('http://localhost:8000/dealerData')
    const data = await res.json()

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json(
      { error: 'Backend is not reachable', details: error },
      { status: 500 }
    )
  }
}
