import React from "react";
import verifyEmailImage from "../../../..//assets/images/auth/verify-email/email.png";
import { Button, Form, Input } from "antd";
import "../../../../App.css";

const emailVerificationImage = verifyEmailImage;

const VerifyEmail = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  console.log("Email Verification Page");

  return (
    <div className="bg-home d-flex align-items-center">
      <div className="container">
        <div className="grid grid-cols-12 ">
          <div className="col-span-12 md:col-span-7">
            <div className="me-lg-5 align-middle">
              <img
                src={emailVerificationImage}
                alt="Jybek Logo"
                className="mx-auto"
                width={560}
              />
            </div>
          </div>

          <div className="col-span-12 md:col-span-5">
            <div className=" shadow-2xl rounded border-t-2 p-2 border-jybekBtn-600">
              <div className="p-10">
                <h3 className="mb-3 mt-0 text-xl font-medium leading-tight text-jybek-600 font-sans">
                  Verify Email
                </h3>
                <hr className="mb-3" />
                <p className="text-neutral-600 text-sm">
                  Please enter your email and click on the button below to
                  verify your email
                </p>

                <div className="flex items-start mt-2">
                  <Form
                    form={form}
                    name="basic"
                    className="w-full"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                  >
                    <div className="mb-4">
                      <label htmlFor="" className="text-neutral-500">Email</label>
                      <Form.Item
                        label=""
                        name="email"
                        className="mt-2"
                        rules={[
                          {
                            required: true,
                            message: "Please input your email!",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    </div>

                    <div className="mb-4">
                      <Form.Item>
                        <Button
                          type="primary"
                          htmlType="submit"
                          className="inline-block w-full border-0 rounded bg-jybekBtn-600 px-7 pb-1 pt-1 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-jybekBtn-400 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-jybekBtn-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong submitBtnsHover"
                        >
                          Submit
                        </Button>
                      </Form.Item>
                    </div>
                  </Form>
                </div>
              </div>
            </div>

            {/* <div className="">
                  <img
                    src={emailVerificationImage}
                    alt="Jybek Logo"
                    className="object-cover h-screen image-responsive"
                  />
                </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
