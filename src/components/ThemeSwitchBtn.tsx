import Image from "next/image";
import LightModeIcon from "../assets/LightModeIcon.svg";
import DarkModeIcon from "../assets/DarkModeIcon.svg";
import { useAtom } from "jotai";
import { colorsAtom, prefersDarkAtom, selectedAtom } from "../lib/atoms";
import { motion } from "framer-motion";

const ThemeSwitchBtn = () => {
  const [colors] = useAtom(colorsAtom);
  const [selected] = useAtom(selectedAtom);
  const [prefersDark, setPrefersDark] = useAtom(prefersDarkAtom);

  return (
    <motion.div
      animate={{ x: 0, opacity: 1 }}
      initial={{ x: -100, opacity: 0 }}
      transition={{ delay: 1.2, duration: 0.3 }}
      className="flex items-center"
    >
      <button
        onClick={() => setPrefersDark(!prefersDark)}
        className="w-8 h-8 p-2 transition ease-in-out rounded-lg hover:opacity-80"
        style={{ background: colors[selected] }}
      >
        <Image
          src={prefersDark ? LightModeIcon : DarkModeIcon}
          alt="change-theme"
        />
      </button>
    </motion.div>
  );
};

export default ThemeSwitchBtn;
