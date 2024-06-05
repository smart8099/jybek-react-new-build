import jybekLogo from "../../../../assets/images/logo/Jybek_logo.png";
import registerCover from "../../../../assets/images/auth/login-cover/register.webp";
import loginCover from "../../../..//assets/images/auth/login-cover/login-cover.webp";
import loginCover2 from "../../../..//assets/images/auth/login-cover/login-cover-2.webp";
import loginCover3 from "../../../..//assets/images/auth/login-cover/login-cover-3.webp";
import { Button, Carousel, Checkbox, Form, Input } from "antd";
import "../../../../App.css";
import { Link } from "react-router-dom";

const carrouselImages = [registerCover, loginCover, loginCover2, loginCover3];

const Login = () => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    console.log("Success:", values);
    form.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

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
                      Welcome to Jybek
                    </h3>
                    <hr className="mb-3" />
                    <p className="text-muted mt-3">
                      Your best beauty proficiency. Use your email address and
                      password to sign in to Jybek
                    </p>
                  </div>
                </div>
                <div className="flex items-start mt-2">
                  <Form
                    form={form}
                    name="basic"
                    className="w-full"
                    initialValues={{ remember: false }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                  >
                    <div className="mb-0">
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
                          {
                            type: "email",
                            message: "Please input valid email"
                          }

                        ]}
                      >
                        <Input  />
                      </Form.Item>
                    </div>

                    <div className="mb-4">
                      <label htmlFor="">Password</label>
                      <Form.Item
                        name="password"
                        className="mt-2"
                        rules={[
                          {
                            required: true,
                            message: "Please input your password!",
                          },
                          {
                            min: 8,
                            message: "Password must be at least 8 characters.",
                          }
                        ]}
                      >
                        <Input.Password />
                      </Form.Item>
                    </div>

                    <div className="mb-4">
                      <Form.Item
                        name="remember"
                        valuePropName="checked"
                        className="text-left"
                      >
                        <Checkbox>Remember me</Checkbox>
                        <span className="capitalize font-normal text-xs text-neutral-800 float-end "> <Link to={'/auth/forgot-password'} className="CustomHover">Forgot Password</Link></span>
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
                   
                   <div className="text-neutral-800 text-center text-xs">
                    Don't have an account? <span className="capitalize font-bold text-jybekBtn-600"> <Link to={'/auth/sign-up'} className="CustomHover">Sign Up</Link></span>
                   </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-8">
          
            <Carousel autoplay fade className="padding-less ">
              {carrouselImages.map((carrouselImage, index) => (
                <div key={index} className="">
                  <img
                    src={carrouselImage}
                    alt="Jybek Logo"
                    className="h-screen image-responsive"
                  />
                </div>
                
              ))}
            </Carousel>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
