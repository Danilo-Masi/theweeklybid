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
    const [description, setDescription] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (amount < minBid) {
            setError(`L'offerta minima per questo slot è $${minBid}`)
            return
        }
        if (!email || !title) {
            setError('Email e titolo sono obbligatori')
            return
        }
        // TODO: collegare al server (Fastify) quando pronto
        console.log('Offerta inviata:', { slotId: slot.id, email, amount, title, description, imageUrl })
        onClose()
    }

    return (
        <div className="fixed inset-0 bg-ink/60 flex items-center justify-center p-4 z-50">
            <div className="bevel-out bg-panel w-full max-w-md p-5">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="font-display text-sm">OFFRI PER: {slot.title === '' ? slot.id.toUpperCase() : slot.title}</h2>
                    <button onClick={onClose} className="bevel-out bg-panel px-2 py-1 font-display text-[10px]">X</button>
                </div>

                <p className="font-sans text-lg text-muted mb-4">
                    Offerta attuale: <span className="text-accent font-semibold">${slot.currentPrice}</span> ·
                    minimo per rilanciare: <span className="text-accent font-semibold">${minBid}</span>
                </p>

                <form onSubmit={handleSubmit} className="space-y-3">
                    <div>
                        <label className="font-display text-[9px] block mb-1">LA TUA EMAIL</label>
                        <input
                            type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                            className="bevel-in bg-paper w-full px-2 py-1.5 font-sans text-lg outline-none"
                        />
                    </div>

                    <div>
                        <label className="font-display text-[9px] block mb-1">LA TUA OFFERTA ($)</label>
                        <input
                            type="number" min={minBid} required value={amount}
                            onChange={(e) => setAmount(Number(e.target.value))}
                            className="bevel-in bg-paper w-full px-2 py-1.5 font-sans text-lg outline-none"
                        />
                    </div>

                    <div>
                        <label className="font-display text-[9px] block mb-1">TITOLO ANNUNCIO</label>
                        <input
                            type="text" required value={title} onChange={(e) => setTitle(e.target.value)}
                            className="bevel-in bg-paper w-full px-2 py-1.5 font-sans text-lg outline-none"
                        />
                    </div>

                    <div>
                        <label className="font-display text-[9px] block mb-1">DESCRIZIONE</label>
                        <textarea
                            value={description} onChange={(e) => setDescription(e.target.value)} rows={2}
                            className="bevel-in bg-paper w-full px-2 py-1.5 font-sans text-lg outline-none resize-none"
                        />
                    </div>

                    <div>
                        <label className="font-display text-[9px] block mb-1">URL IMMAGINE</label>
                        <input
                            type="url" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)}
                            className="bevel-in bg-paper w-full px-2 py-1.5 font-sans text-lg outline-none"
                        />
                    </div>

                    {error && <p className="font-sans text-lg text-accent">{error}</p>}

                    <button
                        type="submit"
                        className="bevel-out bg-accent text-paper font-display text-xs w-full py-2 mt-2 active:bevel-in"
                    >
                        CONFERMA OFFERTA
                    </button>
                </form>
            </div>
        </div>
    )
}