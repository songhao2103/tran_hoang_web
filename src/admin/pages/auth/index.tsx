import { useState } from "react";
import logo from "../../../assets/images/logos/logo1.jfif";
import Register from "./components/Register";
import Login from "./components/Login";
import { AnimatePresence, motion } from "framer-motion";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const variants = {
    initial: (direction: number) => ({
      y: direction > 0 ? 300 : -300,
      opacity: 0,
      position: "absolute",
    }),
    animate: {
      y: 0,
      opacity: 1,
      position: "relative",
    },
    exit: (direction: number) => ({
      y: direction > 0 ? -300 : 300,
      opacity: 0,
      position: "absolute",
    }),
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-full max-w-[500px] flex flex-col items-center shadow-lg border rounded-md p-6 relative overflow-hidden">
        <img src={logo} alt="Logo" className="mb-4" />

        <div className="w-full h-full relative min-h-[300px] overflow-hidden">
          <AnimatePresence custom={isLogin ? 1 : -1} mode="wait">
            {isLogin ? (
              <motion.div
                key="login"
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                custom={1}
                transition={{ duration: 0.4 }}
                className="w-full h-full"
              >
                <Login />
              </motion.div>
            ) : (
              <motion.div
                key="register"
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                custom={-1}
                transition={{ duration: 0.4 }}
                className="w-full h-full"
              >
                <Register />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Nút chuyển */}
        <div className="mt-2">
          {isLogin ? (
            <p>
              Chưa có tài khoản?{" "}
              <span
                className="text-blue-500 underline cursor-pointer"
                onClick={() => setIsLogin(false)}
              >
                Đăng ký
              </span>
            </p>
          ) : (
            <p>
              Đã có tài khoản?{" "}
              <span
                className="text-blue-500 underline cursor-pointer"
                onClick={() => setIsLogin(true)}
              >
                Đăng nhập
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
