import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="flex min-h-screen flex-col items-center bg-gradient-to-b from-cream to-rose pt-6 sm:justify-center sm:pt-0">
            <div>
                <Link href="/">
                    <ApplicationLogo className="text-gray-500 h-20 w-20 fill-current" />
                </Link>
            </div>

            <div className="mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg">
                {children}
            </div>

            <div className="text-10xl absolute bottom-0 right-0 font-black text-white">
                <svg width="364" height="430" viewBox="0 0 364 430" fill="none">
                    <path
                        d="M247.907 143.143C246.763 128.857 241.402 117.714 231.823 109.714C222.387 101.714 208.019 97.7143 188.718 97.7143C176.423 97.7143 166.343 99.2143 158.48 102.214C150.76 105.071 145.041 109 141.324 114C137.607 119 135.677 124.714 135.534 131.143C135.248 136.429 136.177 141.214 138.322 145.5C140.609 149.643 144.183 153.429 149.044 156.857C153.905 160.143 160.124 163.143 167.702 165.857C175.279 168.571 184.286 171 194.723 173.143L230.751 180.857C255.055 186 275.857 192.786 293.156 201.214C310.455 209.643 324.609 219.571 335.618 231C346.626 242.286 354.704 255 359.851 269.143C365.141 283.286 367.857 298.714 368 315.429C367.857 344.286 360.637 368.714 346.34 388.714C332.044 408.714 311.599 423.929 285.007 434.357C258.558 444.786 226.747 450 189.576 450C151.403 450 118.092 444.357 89.641 433.071C61.3333 421.786 39.3162 404.429 23.5897 381C8.00621 357.429 0.142968 327.286 0 290.571H113.231C113.946 304 117.305 315.286 123.31 324.429C129.315 333.571 137.75 340.5 148.615 345.214C159.624 349.929 172.706 352.286 187.86 352.286C200.584 352.286 211.235 350.714 219.814 347.571C228.392 344.429 234.897 340.071 239.329 334.5C243.761 328.929 246.048 322.571 246.191 315.429C246.048 308.714 243.832 302.857 239.543 297.857C235.397 292.714 228.535 288.143 218.956 284.143C209.377 280 196.438 276.143 180.14 272.571L136.392 263.143C97.5043 254.714 66.8376 240.643 44.3916 220.929C22.0886 201.071 11.0085 174 11.1515 139.714C11.0085 111.857 18.4429 87.5 33.4545 66.6429C48.6092 45.6429 69.554 29.2857 96.289 17.5714C123.167 5.85714 153.977 0 188.718 0C224.174 0 254.841 5.92857 280.718 17.7857C306.595 29.6429 326.539 46.3572 340.55 67.9286C354.704 89.3571 361.852 114.429 361.995 143.143H247.907Z"
                        fill="white"
                        fillOpacity="0.25"
                    />
                </svg>
            </div>
        </div>
    );
}
