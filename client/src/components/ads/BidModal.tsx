import { useState } from 'react'
import type { AdSlot } from '../../types'
import { useNavigate } from 'react-router-dom'

interface Props {
    slot: AdSlot
    onClose: () => void
}

// Same ratio used by the real slot components — hero/medium go square on
// mobile and widescreen from md: up, small stays square everywhere.
const aspectClassBySize: Record<AdSlot['size'], string> = {
    hero: 'aspect-square md:aspect-video',
    medium: 'aspect-square md:aspect-video',
    small: 'aspect-square',
}

const formatHintBySize: Record<AdSlot['size'], string> = {
    hero: 'Best as a square image (1:1) — it will be cropped to widescreen (16:9) on larger screens.',
    medium: 'Best as a square image (1:1) — it will be cropped to widescreen (16:9) on larger screens.',
    small: 'Best as a square image (1:1) — it stays square on every screen size.',
}

export default function BidModal({ slot, onClose }: Props) {
    const navigate = useNavigate()
    const minBid = slot.currentPrice + slot.minIncrement
    const [email, setEmail] = useState('')
    const [amount, setAmount] = useState(minBid)
    const [title, setTitle] = useState('')
    const [link, setLink] = useState('')
    const [image, setImage] = useState<File | null>(null)
    const [imagePreview, setImagePreview] = useState<string | null>(null)
    const [error, setError] = useState('')

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] ?? null
        setImage(file)
        setImagePreview(file ? URL.createObjectURL(file) : null)
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (amount < minBid) {
            setError(`Minimum bid for this slot is $${minBid}`)
            return
        }
        if (!email || !title || !link || !image) {
            setError('Email, title, link and image are required')
            return
        }
        // TODO: connect to the server (Fastify) once ready — upload the image file too
        console.log('Bid submitted:', { slotId: slot.id, email, amount, title, link, image })
        onClose()
        navigate(`/bid/confirmation?slot=${slot.id}&amount=${amount}`)
    }

    return (
        <div className="fixed inset-0 bg-ink/80 flex items-center justify-center p-4 z-50">
            {/* Dialog container */}
            <div className="panel-box w-full max-w-md max-h-[80svh] overflow-scroll p-5 scrollbar-none">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-sm font-bold">Bid on: {slot.title || slot.id.toUpperCase()}</h2>
                    <button onClick={onClose} className="panel-box px-2 py-1 text-xs cursor-pointer">x</button>
                </div>
                {/* Header 2 */}
                <p className="text-sm text-muted mb-4">
                    Current bid: <span className="text-danger font-semibold">${slot.currentPrice}</span> ·
                    minimum to bid: <span className="text-danger font-semibold">${minBid}</span>
                </p>
                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-3">
                    {/* Email input */}
                    <div>
                        <label className="text-xs block mb-1">YOUR EMAIL</label>
                        <input
                            type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                            placeholder='levelsio@gmail.com'
                            className="panel-box w-full px-2 py-1.5 text-sm outline-none" />
                    </div>
                    {/* Bid input */}
                    <div>
                        <label className="text-xs block mb-1">YOUR BID ($)</label>
                        <input
                            type="number" min={minBid} required value={amount}
                            onChange={(e) => setAmount(Number(e.target.value))}
                            className="panel-box w-full px-2 py-1.5 text-sm outline-none" />
                    </div>
                    {/* Title input */}
                    <div>
                        <label className="text-xs block mb-1">AD TITLE</label>
                        <input
                            type="text" required value={title} onChange={(e) => setTitle(e.target.value)}
                            placeholder='nomads'
                            className="panel-box w-full px-2 py-1.5 text-sm outline-none" />
                    </div>
                    {/* Link input */}
                    <div>
                        <label className="text-xs block mb-1">LINK (your website)</label>
                        <input
                            type="url" required value={link} onChange={(e) => setLink(e.target.value)}
                            placeholder="https://"
                            className="panel-box w-full px-2 py-1.5 text-sm outline-none" />
                    </div>
                    {/* File input */}
                    <div>
                        <label className="text-xs block mb-1">IMAGE</label>
                        <input
                            type="file" accept="image/*" required onChange={handleImageChange}
                            className="panel-box w-full px-2 py-1.5 text-sm outline-none file:mr-2 file:border-0 file:bg-ink file:text-paper file:px-2 file:py-1 file:text-xs cursor-pointer" />
                        <p className="text-[11px] text-muted mt-1">{formatHintBySize[slot.size]}</p>
                        {imagePreview && (
                            <div className={`panel-box mt-2 w-full ${aspectClassBySize[slot.size]}`}>
                                <img src={imagePreview} alt="Preview" className="h-full w-full object-cover" />
                            </div>
                        )}
                    </div>
                    {/* Error text */}
                    {error && <p className="text-sm text-danger">{error}</p>}
                    {/* Confirm button */}
                    <button
                        type="submit"
                        disabled={amount < minBid}
                        className="w-full py-2.5 mt-2 text-sm font-bold cursor-pointer bg-danger text-paper transition hover:brightness-110 active:translate-y-px disabled:opacity-40 disabled:cursor-not-allowed">
                        Confirm bid — ${amount} »
                    </button>
                </form>
            </div>
        </div>
    )
}