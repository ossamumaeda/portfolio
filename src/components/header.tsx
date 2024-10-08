export function Header() {
    return (
        <div className="w-full h-20 flex justify-between fixed">
            <div className="flex items-center w-full h-full ml-16">
                <span className="text-black text-3xl">
                    Gabriel Maeda
                </span>
            </div>
            <div className="flex items-center w-full h-full  justify-end mr-16 space-x-4">
                <div>
                    <span className="text-black text-lg">
                        WORK
                    </span>
                </div>
                <div>
                    <span className="text-black text-lg">
                        ABOUT
                    </span>
                </div>
                <div>
                    <span className="text-black text-lg">
                        RESUME
                    </span>
                </div>
            </div>
        </div>
    );
}