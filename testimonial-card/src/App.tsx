import TestimonialCard from "./components/TestimonialCard"
import profile from "./assets/profile-thumbnail.png"

function App() {

  return (
    <div className="h-screen bg-linear-to-br from-white to-gray-200 flex justify-center">

      <TestimonialCard name ="Sarah Dole" userName="@sarahdole" msg="I've been searching for high-quality abstract images for my design projects, 
      and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!" img={profile} />

    </div>
  )

}

export default App