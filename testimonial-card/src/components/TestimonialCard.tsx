

interface TestimonialCard {
    name: string;
    userName: string;
    img: string;
    msg: string;
}

function TestimonialCard({name, userName, img, msg}: TestimonialCard) {

    return (
        <div className="shadow-2xl rounded-xl p-4 mx-4 max-h-max max-w-[340px] mt-50">
            <div className="flex items-center">
                <div className="w-15">
                    <img src={img} alt="profile-pic" />
                </div>
                <div className="ml-3">
                    <p className="font-semibold">{name}</p>
                    <p>{userName}</p>
                </div>
            </div>

            <p className="mt-5 text-gray-700">{msg}</p>
        </div>
    )
}

export default TestimonialCard