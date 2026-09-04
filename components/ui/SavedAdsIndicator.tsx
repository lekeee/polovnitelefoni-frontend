import { Heart } from "lucide-react";

type Props = {
    savedCount?: number;
}

export default function SavedAdsIndicator({ savedCount = 0 }: Props) {
    return <div className="relative">
        <Heart className="text-black w-6 h-6" />
        {
            savedCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">{savedCount}</span>
            )
        }
    </div>
}