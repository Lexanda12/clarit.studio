import { revalidatePath } from 'next/cache'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const secret = req.headers.get('x-revalidate-secret')

    if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
      return NextResponse.json(
        { error: 'Invalid secret' },
        { status: 401 }
      )
    }

    revalidatePath('/')
    revalidatePath('/writing')
    revalidatePath('/work/precision')

    return NextResponse.json({ revalidated: true, timestamp: Date.now() })
  } catch (error) {
    console.error('Revalidation error:', error)
    return NextResponse.json(
      { error: 'Revalidation failed' },
      { status: 500 }
    )
  }
}
