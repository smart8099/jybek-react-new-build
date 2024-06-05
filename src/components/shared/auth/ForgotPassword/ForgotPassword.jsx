import React from 'react';
import jybekLogo from "../../../../assets/images/logo/Jybek_logo.png";
import loginCover from "../../../..//assets/images/auth/login-cover/login-cover.webp";
import { Button, Form, Input } from "antd";
import "../../../../App.css";
import { Link } from 'react-router-dom';

const forgotPasswordImage =  loginCover ;


const ForgotPassword = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) =>{
      console.log("failed:", errorInfo);
    };

    console.log("Forgot Password Page");

    return (
    <div className="bg-white cover-user">
      <div className="">
        <div className="grid grid-cols-12 ">
          <div className="col-span-12 md:col-span-4">
            <div className="cover-user-img cover-my-30">
              <div className="card text-sm pt-60">
                <div className="flex flex-col justify-left mb-4">
                  <img
                    src={jybekLogo}
                    className="img-fluid w-32 bg-center mb-6"
                    alt="Jybek Logo"
                  />
                  <div>
                    <h3 className="mb-3 mt-0 text-2xl font-medium leading-tight text-jybek-600">
                    Recover Account
                    </h3>
                    <hr className="mb-3" />
                    <p className="text-muted mt-3">
                    Please enter your email address to recover your account password
                    </p>
                  </div>
                </div>
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
                      <label htmlFor="">Email</label>
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
                      type='primary'
                        htmlType="submit"
                        className="inline-block w-full border-0 rounded bg-jybekBtn-600 px-7 pb-1 pt-1 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-jybekBtn-400 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-jybekBtn-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong submitBtnsHover"
                      >
                        Submit
                      </Button>
                    </Form.Item>
                    </div>
                   
                   <div className="text-neutral-800 text-center text-xs">
                    Remembered your password? <span className="capitalize font-bold text-jybekBtn-600 "> <Link to={'/auth/login'} className='CustomHover'>Sign In</Link> </span>
                   </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-8">
          

                <div className="">
                  <img
                    src={forgotPasswordImage}
                    alt="Jybek Logo"
                    className="object-cover h-screen image-responsive"
                  />
                </div>
            
          </div>
        </div>
      </div>
    </div>
    );
};

export default ForgotPassword;
