import { useEffect, useState } from "react";

function FlashSale() {
    const [timeLeft, setTimeLeft] = useState({
        hours: 5,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                let { hours, minutes, seconds } = prev;

                if (seconds > 0) {
                    seconds--;
                } else if (minutes > 0) {
                    minutes--;
                    seconds = 59;
                } else if (hours > 0) {
                    hours--;
                    minutes = 59;
                    seconds = 59;
                }

                return {
                    hours,
                    minutes,
                    seconds,
                };
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="bg-gradient-to-r from-red-600 to-orange-500 text-white py-16 my-20 rounded-xl">
            <div className="max-w-7xl mx-auto text-center">

                <h2 className="text-5xl font-bold">
                    ⚡ Flash Sale
                </h2>

                <p className="text-2xl mt-4">
                    Up to 70% OFF
                </p>

                <div className="flex justify-center gap-6 mt-10">

                    <div className="bg-white text-black px-6 py-4 rounded-lg">
                        <h1 className="text-4xl font-bold">
                            {String(timeLeft.hours).padStart(2, "0")}
                        </h1>
                        <p>Hours</p>
                    </div>

                    <div className="bg-white text-black px-6 py-4 rounded-lg">
                        <h1 className="text-4xl font-bold">
                            {String(timeLeft.minutes).padStart(2, "0")}
                        </h1>
                        <p>Minutes</p>
                    </div>

                    <div className="bg-white text-black px-6 py-4 rounded-lg">
                        <h1 className="text-4xl font-bold">
                            {String(timeLeft.seconds).padStart(2, "0")}
                        </h1>
                        <p>Seconds</p>
                    </div>

                </div>

                <button className="mt-10 bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition">
                    Shop Now
                </button>

            </div>
        </section>
    );
}

export default FlashSale;