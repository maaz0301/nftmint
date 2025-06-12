// "use client";

// import React from "react";
// import { Modal, List, Typography, Space, Button } from "antd";
// import Image from "next/image";

// const notifications = [
//   {
//     key: 1,
//     type: "Reward",
//     message: '🎉 You won the "OG Cat WL Spot" fundraiser! Claim now.',
//     time: "Just Now",
//   },
//   {
//     key: 2,
//     type: "Reward",
//     message: "💰 You claimed 7.8 USDC from Burner NFT rewards.",
//     time: "Today, 2:00 PM",
//   },
//   {
//     key: 3,
//     type: "OG Cat",
//     message: "📬 OG Cat #823 was listed for 25 USDC.",
//     time: "1 hour ago",
//   },
// ];

// const NotificationModal = ({ isVisible, handleCancel }) => {
//   return (
//     <Modal
//       open={isVisible}
//       onCancel={handleCancel}
//       closeIcon={
//         <Image
//           src="/assets/icons/onclose.svg"
//           alt="close"
//           className="w-5 h-5 cursor-pointer hover:opacity-80"
//           height={20}
//           width={20}
//         />
//       }
//       footer={null}
//       width={600}
//       className="custom-modal modal-bg"
//       title={
//         <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//           <Typography.Title level={5} style={{ margin: 0, color: "#fff" }}>
//             Notifications
//           </Typography.Title>
//           <Button type="link" style={{ color: "white",  fontSize: "14px" }} className="underline text-white">
//             Mark all as read
//           </Button>
//         </div>
//       }
//     >
//       <div style={{ color: "#fff" }}>
//         <List
//           dataSource={notifications}
//           renderItem={(notification) => (
//             <div
//               style={{
//                 marginBottom: "15px",
//                 padding: "10px",
//                 borderBottom: "1px solid #333",
//               }}
//             >
//               <Typography.Text style={{ fontWeight: "bold", color: "#fff" }}>
//                       {notification.type}
//                     </Typography.Text>
//               <Space size="middle" style={{ width: "100%" }}>
//                 <div style={{ flex: 1 }}>
//                   <div className="flex  flex-col">
//                   <Typography.Text
//                     style={{
//                       display: "block",
//                       color: "#ccc",
//                       marginTop: "5px",
//                     }}
//                   >
//                     {notification.message}
//                   </Typography.Text>
//                     <Typography.Text style={{ fontSize: "12px", color: "#bbb",  textAlign:"end"}}>
//                       {notification.time}
//                     </Typography.Text>
//                   </div>

                 
//                 </div>
//               </Space>
//             </div>
//           )}
//         />
//       </div>
//     </Modal>
//   );
// };

// export default NotificationModal;
"use client";

import React from "react";
import { Modal, List, Typography, Space, Button } from "antd";
import Image from "next/image";

const notifications = [
  {
    key: 1,
    type: "Reward",
    message: '🎉 You won the "OG Cat WL Spot" fundraiser! Claim now.',
    time: "Just Now",
  },
  {
    key: 2,
    type: "Reward",
    message: "💰 You claimed 7.8 USDC from Burner NFT rewards.",
    time: "Today, 2:00 PM",
  },
  {
    key: 3,
    type: "OG Cat",
    message: "📬 OG Cat #823 was listed for 25 USDC.",
    time: "1 hour ago",
  },
];

const NotificationModal = ({ isVisible, handleCancel }) => {
  return (
    <Modal
      open={isVisible}
      onCancel={handleCancel}
      closeIcon={
        <Image
          src="/assets/icons/onclose.svg"
          alt="close"
          className="w-5 h-5 cursor-pointer hover:opacity-80"
          height={20}
          width={20}
        />
      }
      footer={null}
      width={600}
    style={{
      borderRadius:'22px'
    }}
      centered // Centering the modal vertically and horizontally
      className="custom-modal modal-bg"
      title={
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography.Title level={5} style={{ margin: 0, color: "#fff" }}>
            Notifications
          </Typography.Title>
          <Button type="link" style={{ color: "white", fontSize: "14px" }} className="underline text-white">
            Mark all as read
          </Button>
        </div>
      }
    >
      <div style={{ color: "#fff" }}>
        <List
          dataSource={notifications}
          renderItem={(notification) => (
            <div
              style={{
                marginBottom: "15px",
                padding: "10px",
                borderBottom: "1px solid #333",
              }}
            >
              <Typography.Text style={{ fontWeight: "bold", color: "#fff" }}>
                {notification.type}
              </Typography.Text>
              <Space size="middle" style={{ width: "100%" }}>
                <div style={{ flex: 1 }}>
                  <div className="flex flex-col">
                    <Typography.Text
                      style={{
                        display: "block",
                        color: "#ccc",
                        marginTop: "5px",
                      }}
                    >
                      {notification.message}
                    </Typography.Text>
                    <Typography.Text style={{ fontSize: "12px", color: "#bbb", textAlign: "end" }}>
                      {notification.time}
                    </Typography.Text>
                  </div>
                </div>
              </Space>
            </div>
          )}
        />
      </div>
    </Modal>
  );
};

export default NotificationModal;
