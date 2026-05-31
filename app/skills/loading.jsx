export default function SkillsLoading() {
    return <div className="grid grid-cols-4 gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
            <div className="card bg-base-200" key={item}>
                <div className="card-body">
                    <div className="skeleton bg-base-300 h-6 w-3/4"></div>
                    <div className="skeleton bg-base-300 h-4 w-full mt-2"></div>
                </div>
            </div>
        ))}
    </div>
}