import { useState } from 'react'
import type { AdSlot } from '../../types'

interface Props {
    slot: AdSlot
    onClose: () => void
}

export default function BidModal({ slot, onClose }: Props) {
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
    }

    return (
        <div className="fixed inset-0 bg-ink/60 flex items-center justify-center p-4 z-50">
            <div className="panel-box w-full max-w-md p-5">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-sm font-bold">Bid on: {slot.title || slot.id.toUpperCase()}</h2>
                    <button onClick={onClose} className="panel-box px-2 py-1 text-xs">×</button>
                </div>

                <p className="text-sm text-muted mb-4">
                    Current bid: <span className="text-danger font-semibold">${slot.currentPrice}</span> ·
                    minimum to bid: <span className="text-danger font-semibold">${minBid}</span>
                </p>

                <form onSubmit={handleSubmit} className="space-y-3">
                    <div>
                        <label className="text-xs block mb-1">YOUR EMAIL</label>
                        <input
                            type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                            className="panel-box w-full px-2 py-1.5 text-sm outline-none"
                        />
                    </div>

                    <div>
                        <label className="text-xs block mb-1">YOUR BID ($)</label>
                        <input
                            type="number" min={minBid} required value={amount}
                            onChange={(e) => setAmount(Number(e.target.value))}
                            className="panel-box w-full px-2 py-1.5 text-sm outline-none"
                        />
                    </div>

                    <div>
                        <label className="text-xs block mb-1">AD TITLE</label>
                        <input
                            type="text" required value={title} onChange={(e) => setTitle(e.target.value)}
                            className="panel-box w-full px-2 py-1.5 text-sm outline-none"
                        />
                    </div>

                    <div>
                        <label className="text-xs block mb-1">LINK (your website)</label>
                        <input
                            type="url" required value={link} onChange={(e) => setLink(e.target.value)}
                            placeholder="https://"
                            className="panel-box w-full px-2 py-1.5 text-sm outline-none"
                        />
                    </div>

                    <div>
                        <label className="text-xs block mb-1">IMAGE</label>
                        <input
                            type="file" accept="image/*" required onChange={handleImageChange}
                            className="panel-box w-full px-2 py-1.5 text-sm outline-none file:mr-2 file:border-0 file:bg-ink file:text-paper file:px-2 file:py-1 file:text-xs"
                        />
                        {imagePreview && (
                            <img src={imagePreview} alt="Preview" className="panel-box mt-2 h-20 w-full object-cover" />
                        )}
                    </div>

                    {error && <p className="text-sm text-danger">{error}</p>}

                    <button type="submit" className="panel-box w-full py-2 mt-2 text-sm font-bold hover:bg-ink hover:text-paper">
                        Confirm bid
                    </button>
                </form>
            </div>
        </div>
    )
}