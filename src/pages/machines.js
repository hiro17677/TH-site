// // src/pages/machines.js
// import React from "react"
// import { Link } from "gatsby"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"

// import Layout from "../components/layout"
// import Seo from "../components/seo"
// import * as styles from "../components/index.module.css"

// // 假设这是您的机台数据
// const machines = [
//   { id: 1, name: "機台 A", description: "機台 A 的描述...", imageUrl: "S__434198.jpg" },
//   { id: 2, name: "機台 B", description: "機台 B 的描述...", imageUrl: "image-b.jpg" },
//   // 添加更多機台...
// ];

// const MachinesPage = () => {
//   return (
//     <Layout>
//       <div className="container mx-auto py-8">
//         <h1 className="text-4xl font-bold text-center mb-8">工廠機台介紹</h1>
//         <div className="flex flex-wrap -mx-4">
//           {machines.map(machine => {
//             const image = getImage(machine.imageUrl)
//             return (
//               <div key={machine.id} className="w-full md:w-1/2 lg:w-1/2 px-4 mb-8">
//                 <div className="bg-white rounded-lg overflow-hidden shadow-lg">
//                   <GatsbyImage image={image} alt={machine.name} className="w-full h-64 object-cover" />
//                   <div className="p-4">
//                     <h2 className="text-xl font-semibold mb-2">{machine.name}</h2>
//                     <p>{machine.description}</p>
//                   </div>
//                 </div>
//               </div>
//             )
//           })}
//         </div>
//       </div>
//     </Layout>
//   )
// }

// export default MachinesPage



// src/pages/machines.js
import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

// 假设这是您的机台数据
const machines = [
  { id: 1, name: "台中精機VS-50"},
  { id: 2, name: "隆泉LCH-120"},
  { id: 3, name: "K-Sonic塑膠熔接機"},
];

const MachinesPage = () => {
  return (
    <Layout>
      <div className="container mx-auto py-10">
        <h1 className="text-4xl font-bold text-center mb-8">工廠機台介紹</h1>
        <div className="flex flex-wrap mx-4 px-6">
          {machines.map(machine => (
            <div key={machine.id} className="w-full md:w-1/2 lg:w-1/2 px-4 mb-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                {machine.id === 1 && <StaticImage src="../images/hero1.jpg" alt={machine.name} className="w-full h-64 object-cover" />}
                {machine.id === 2 && <StaticImage src="../images/LCH120B.jpg" alt={machine.name} className="w-full h-64 object-cover" />}
                {machine.id === 3 && <StaticImage src="../images/S__434202.jpg" alt={machine.name} className="w-full h-64 object-cover" />}
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{machine.name}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default MachinesPage