import Surprise from "../util/confetti";
import Link from 'next/link';
import Image from "next/image";

export default function page() {
    return (
        <div>
            <div className="homepage-link">
                <Link href='/'> ← Go Back</Link>
            </div>
            <div>
                <section className="success">
                    <Surprise />
                    <Image src="/celebrate.gif" alt="two animals holding hearts and smiling gif" width={570} height={300} className="yay-img" priority />
                    <p id="yay">💖 Yipee! See you on Monday 💖</p>
                </section>
            </div>
        </div>
    )
}