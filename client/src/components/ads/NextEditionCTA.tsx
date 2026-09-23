import { Link } from 'react-router-dom'
import Countdown from '../ui/Countdown'
import { nextAuctionEnd } from '../../lib/mockData'

export default function NextEditionCTA() {
    return (
        <Link
            to="/next-edition"
            className="group ticket-shape relative block w-full bg-paper px-4 pt-5 pb-3 no-underline hover:bg-panel active:bg-ink mb-3"
        >
            <svg className="pointer-events-none absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
                <rect
                    x="1" y="1"
                    style={{ width: 'calc(100% - 2px)', height: 'calc(100% - 2px)' }}
                    fill="none" stroke="var(--color-ink)" strokeWidth="1.5" strokeDasharray="6 4"
                    className="marching-ants"
                />
            </svg>

            <span className="absolute top-0 left-0 bg-ink text-paper text-[9px] font-bold px-1.5 py-0.5">
                AD SPACE
            </span>

            <div className="flex flex-col gap-2 text-ink group-active:text-paper sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm font-bold">Advertise on next week's front page</p>
                    <p className="text-xs opacity-70">Every visitor sees the winning ad all week long.</p>
                </div>
                <Countdown targetDate={nextAuctionEnd} label="Closes in:" />
            </div>

            <div className="mt-2 flex items-center justify-center gap-1 border-t border-ink/20 pt-2 text-xs font-bold text-ink group-active:text-paper sm:justify-end sm:border-t-0 sm:pt-0">
                Save your spot <span aria-hidden="true">→</span>
            </div>
        </Link>
    )
}