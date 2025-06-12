// "use client";

// import Button from "@/components/shared/button";
// import Input from "@/components/shared/input";
// import { Modal, Form } from "antd";
// import Image from "next/image";
// import { useState } from "react";

// const ChangePasswordModal = ({ open, onCancel, onSubmit }) => {
//   const [form] = Form.useForm();

//   const handleFinish = (values) => {
//     onSubmit(values);
//     form.resetFields();
//   };

//   return (
//     <Modal
//       title={
//         <span className="text-white text-xl font-bold">Change Password</span>
//       }
     
//       open={open}
//       onCancel={onCancel} // ← this should stay a function
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
//       centered
//       closable
//       className=".custom-box-modal change-password-modal"
//     >
//       <Form layout="vertical" form={form} onFinish={handleFinish}>
//         <Form.Item
//           label={<span className="text-white text-sm ">Current Password</span>}
//           name="current"
//           rules={[{ required: true, message: "Please enter current password" }]}
//         >
//           <Input
//             type="password"
//             placeholder="Type here..."
//             name="current"
//             icon
//             className="w-full bg-black/20 text-white py-2 border border-[#FFFFFF1A] rounded-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </Form.Item>

//         <Form.Item
//           label={<span className="text-white text-sm ">New Password</span>}
//           name="new"
//           rules={[{ required: true, message: "Please enter new password" }]}
//         >
//           <Input
//             type="password"
//             placeholder="Type here..."
//             name="new"
//             icon
//             className="w-full bg-black/20 text-white py-2 border border-[#FFFFFF1A] rounded-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </Form.Item>

//         <Form.Item
//           label={
//             <span className="text-white text-sm ">Confirm New Password</span>
//           }
//           name="confirm"
//           dependencies={["new"]}
//           rules={[
//             { required: false, message: "Please confirm your password" },
//             ({ getFieldValue }) => ({
//               validator(_, value) {
//                 if (!value || getFieldValue("new") === value) {
//                   return Promise.resolve();
//                 }
//                 return Promise.reject(new Error("Passwords do not match"));
//               },
//             }),
//           ]}
//         >
//           <Input
//             type="password"
//             placeholder="Type here..."
//             name="confirm"
//             icon
//             className="w-full bg-black/20 text-white py-2 border border-[#FFFFFF1A] rounded-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </Form.Item>

//         <div className="flex  justify-end items-center gap-3">
//           <Button
//             onClick={() => {
//               form.resetFields();
//               onCancel();
//             }}
//             className={
//               " text-white w-[100%] py-2  border-1  border-red-500 rounded-[8px]"
//             }
//             text={"Cancel "}
//           />

//           <Button
//             onClick={() => {
//               form.resetFields();
//               onCancel();
//             }}
//             className={" text-white w-[100%] py-2  bg-[#4184D6] rounded-[8px] font-[Inter] text-sm font-medium"}
//             text={"Change Password"}
//           />

//         </div>
//       </Form>
//     </Modal>
//   );
// };

// export default ChangePasswordModal;

"use client";

import Button from "@/components/shared/button";
import Input from "@/components/shared/input";
import { Modal, Form } from "antd";
import Image from "next/image";
import { useState } from "react";
import successGif from "../../../../public/assets/icons/success.gif"; // Your success gif path

const ChangePasswordModal = ({ open, onCancel, onSubmit }) => {
  const [form] = Form.useForm();
  const [isPasswordChanged, setIsPasswordChanged] = useState(false); // State for success screen
  const [isSubmitting, setIsSubmitting] = useState(false); // State to manage the submission process

  const handleFinish = (values) => {
    setIsSubmitting(true); 
    onSubmit(values); 
    setIsPasswordChanged(true); 
    setTimeout(() => {
      form.resetFields(); 
      setIsPasswordChanged(false); 
      onCancel(); 
      setIsSubmitting(false); 
    }, 2000); 
  };

  return (
    <Modal
      title={<span className="text-white text-xl font-bold">Change Password</span>}
      open={open}
      onCancel={onCancel}
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
      centered
      closable
      className="custom-box-modal change-password-modal"
    >
      <div className="relative w-full h-full">
        {isPasswordChanged ? (
          // Success screen after password change
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black/70">
            <Image src={successGif} alt="Success" />
            <p className="text-white text-2xl mt-4">Password Changed Successfully!</p>
          </div>
        ) : (
          // Form content when password is not changed yet
          <Form layout="vertical" form={form} onFinish={handleFinish}>
            <Form.Item
              label={<span className="text-white text-sm">Current Password</span>}
              name="current"
              rules={[{ required: true, message: "Please enter current password" }]}
            >
              <Input
                type="password"
                placeholder="Type here..."
                name="current"
                icon
                className="w-full bg-black/20 text-white py-2 border border-[#FFFFFF1A] rounded-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </Form.Item>

            <Form.Item
              label={<span className="text-white text-sm">New Password</span>}
              name="new"
              rules={[{ required: true, message: "Please enter new password" }]}
            >
              <Input
                type="password"
                placeholder="Type here..."
                name="new"
                icon
                className="w-full bg-black/20 text-white py-2 border border-[#FFFFFF1A] rounded-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </Form.Item>

            <Form.Item
              label={<span className="text-white text-sm">Confirm New Password</span>}
              name="confirm"
              dependencies={["new"]}
              rules={[
                { required: false, message: "Please confirm your password" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("new") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error("Passwords do not match"));
                  },
                }),
              ]}
            >
              <Input
                type="password"
                placeholder="Type here..."
                name="confirm"
                icon
                className="w-full bg-black/20 text-white py-2 border border-[#FFFFFF1A] rounded-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </Form.Item>

            <div className="flex justify-end items-center gap-3">
              <Button
                onClick={() => {
                  form.resetFields();
                  onCancel();
                }}
                className="text-white w-[100%] py-2 border-1 border-red-500 rounded-[8px]"
                text="Cancel"
              />
              <Button
                type="submit"
                className="text-white w-[100%] py-2 bg-[#4184D6] rounded-[8px] font-[Inter] text-sm font-medium"
                text={isSubmitting ? "Changing..." : "Change Password"} // Display changing text
                disabled={isSubmitting} // Disable button during submission
              />
            </div>
          </Form>
        )}
      </div>
    </Modal>
  );
};

export default ChangePasswordModal;
