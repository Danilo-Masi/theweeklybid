export default function PriceBanner({ price }: { price: number }) {
    return (
        <div className="w-min h-min px-3.5 py-1.5 bg-red-500 text-sm text-white font-bold blink absolute top-2 left-2">
            ${price}
        </div>
    )
}
