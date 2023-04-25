import Layout from "@/components/layout"
import Image from "next/image"

const Contact = () => {
  return (
    <Layout title="Contact">
     <div className="bg-white text-center shadow-xl p-8 w-80 rounded">
      <p className="font-bold">Contact info</p>
      <div className="flex justify-center mt-4">
        <Image className="rounded-full" src="/avatar.jpg" width={60} height={60} alt="アバター"  />
      </div>
     </div>
    </Layout>
  )
}

export default Contact