export default function DashboardPage() {
    return (
        <>
            <div className="min-h-screen">
                <div className="flex justify-center pt-4">
                    <div className="stats shadow-lg border-1 border-black rounded-box flex flex-col sm:flex-row">
                        <a href="#" className="stat border-inline-end">
                            <div className="stat-figure text-primary">
                                <svg className="inline-block h-8 w-8 stroke-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" stroke="#fill" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" stroke="fill" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <div className="stat-title">Pages Brouillons</div>
                            <div className="stat-value">4</div>
                            {/*<div className="stat-desc">Jan 1st - Feb 1st</div>*/}
                        </a>

                        <a href="#" className="stat">
                            <div className="stat-figure text-primary">
                                {/*<svg*/}
                                {/*    xmlns="http://www.w3.org/2000/svg"*/}
                                {/*    fill="none"*/}
                                {/*    viewBox="0 0 24 24"*/}
                                {/*    className="inline-block h-8 w-8 stroke-current"*/}
                                {/*>*/}
                                {/*    <path*/}
                                {/*        strokeLinecap="round"*/}
                                {/*        strokeLinejoin="round"*/}
                                {/*        strokeWidth="2"*/}
                                {/*        d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"*/}
                                {/*    ></path>*/}
                                {/*</svg>*/}
                                <svg className="inline-block h-8 w-8 stroke-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="none" stroke="#fill" strokeWidth="2" d="M20,15 C19,16 21.25,18.75 20,20 C18.75,21.25 16,19 15,20 C14,21 13.5,23 12,23 C10.5,23 10,21 9,20 C8,19 5.25,21.25 4,20 C2.75,18.75 5,16 4,15 C3,14 1,13.5 1,12 C1,10.5 3,10 4,9 C5,8 2.75,5.25 4,4 C5.25,2.75 8,5 9,4 C10,3 10.5,1 12,1 C13.5,1 14,3 15,4 C16,5 18.75,2.75 20,4 C21.25,5.25 19,8 20,9 C21,10 23,10.5 23,12 C23,13.5 21,14 20,15 Z M7,12 L10,15 L17,8"/>
                                </svg>
                            </div>
                            <div className="stat-title">Pages Validés</div>
                            <div className="stat-value">2</div>
                            <div className="stat-desc"></div>
                        </a>

                        <a href="#" className="stat">
                            <div className="stat-figure text-primary">
                                {/*<svg*/}
                                {/*    xmlns="http://www.w3.org/2000/svg"*/}
                                {/*    fill="none"*/}
                                {/*    viewBox="0 0 24 24"*/}
                                {/*    className="inline-block h-8 w-8 stroke-current"*/}
                                {/*>*/}
                                {/*    <path*/}
                                {/*        strokeLinecap="round"*/}
                                {/*        strokeLinejoin="round"*/}
                                {/*        strokeWidth="2"*/}
                                {/*        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"*/}
                                {/*    ></path>*/}
                                {/*</svg>*/}
                                <svg className="inline-block h-8 w-8 stroke-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 16V12M12 8H12.01M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z" stroke="#fill" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <div className="stat-title">Total Vues</div>
                            <div className="stat-value">4,152</div>
                            <div className="stat-desc">↗︎ 400 (22%)</div>
                        </a>
                    </div>

                </div>
                <div className="mt-4 w-[160px] mx-auto gap-y-3 sm:w-full text-center flex flex-col sm:flex-row justify-center">
                    <button className="btn btn-outline btn-primary mx-2">Nouveau brouillon</button>
                    <button className="btn btn-outline btn-neutral mx-2">Publier un brouillon</button>
                </div>
            </div>
        </>
    );
}
