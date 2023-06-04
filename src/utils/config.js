import PasswordIcon from "@mui/icons-material/Password";
import CalculateIcon from "@mui/icons-material/Calculate";
import CompressIcon from "@mui/icons-material/Compress";
// import CodeIcon from "@mui/icons-material/Code";
import AutoModeIcon from "@mui/icons-material/AutoMode";
// import ShutterSpeedIcon from "@mui/icons-material/ShutterSpeed";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
// import VpnKeyIcon from "@mui/icons-material/VpnKey";
// import TextFieldsIcon from "@mui/icons-material/TextFields";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

export const config = [
  {
    title: "Password Generator",
    subTitle:
      "A tool that generates strong and secure passwords based on specified criteria, such as length, inclusion of special characters, or randomization.",
    icon: <PasswordIcon color="primary" />,
    path: "/password-generator",
  },
  {
    title: "PX to REM",
    subTitle:
      "A tool that converts pixels to the CSS unit REM. The conversion is based on the default font-size of 16 pixel, but can be changed.",
    icon: <AutoModeIcon sx={{ color: "#e91e63" }} />,
    path: "/px-to-rem",
  },
  {
    title: "Fitness and Health Calculator",
    subTitle:
      "The Detailed Fitness and Health Calculator is a comprehensive tool that provides various measurements and calculations related to fitness and health.",
    icon: <CalculateIcon sx={{ color: "#f44336" }} />,
    path: "/bmi-calculator",
  },
  {
    title: "QR Code Generator",
    subTitle:
      "A tool that generates QR codes from text, URLs, or contact information. Users can input their desired content, and the tool generates a scannable QR code that can be used for various purposes.",
    icon: <QrCodeScannerIcon sx={{ color: "#4caf50" }} />,
    path: "/qr-code-generator",
  },
  {
    title: "Reels Downloader",
    subTitle:
      "An Instagram Reel downloader is a tool or application that allows users to download or save Instagram Reels to their devices. Instagram Reels are short, multi-clip videos that users can create and share on the Instagram platform.",
    icon: (
      <InstagramIcon
        sx={{
          background:
            "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);",
          color: "white",
        }}
      />
    ),
    path: "/reel-downloader",
  },
  {
    title: "Image Compressor",
    subTitle:
      "An image compression tool that allows users to upload images and compress them to reduce file size without significant loss of quality. This can be helpful for optimizing images for websites or sharing them online.",
    icon: <CompressIcon sx={{ color: "#673ab7" }} />,
    path: "/image-compressor",
  },
  {
    title: "Youtube Videos/Shorts Downloader",
    subTitle:
      "A Youtube Videos/Shorts Downloader downloader is a tool or application that allows users to download or save Youtube Shorts and Video to their devices.",
    icon: <YouTubeIcon sx={{ color: "#c4302B" }} />,
    path: "/youtube-downloader",
  },
  // {
  //   title: "Markdown Editor",
  //   subTitle:
  //     "a Markdown editor that provides a user-friendly interface for writing and previewing Markdown-formatted text. Users can create formatted content and export it to HTML or other formats.",
  //   icon: <CodeIcon sx={{ color: "#3f51b5" }} />,
  //   path: "/markdown-editor",
  // },
  // {
  //   title: "Pomodoro Timer",
  //   subTitle:
  //     "A a Pomodoro technique timer that helps users manage their time and improve productivity. It includes adjustable work and break intervals, notifications, and tracking features",
  //   icon: <ShutterSpeedIcon sx={{ color: "#18ff" }} />,
  //   path: "/pomodoro-timer",
  // },
  // {
  //   title: "Password Strength Checker",
  //   subTitle:
  //     "A tool that assesses the strength of a password entered by the user. It can analyze factors like length, complexity, and common patterns to provide feedback on the password's strength.",
  //   icon: <VpnKeyIcon sx={{ color: "#c51162" }} />,
  //   path: "/password-strength-checker",
  // },
  // {
  //   title: "Lorem Ipsum Generator",
  //   subTitle:
  //     "A utility that generates placeholder text in the form of Lorem Ipsum. Users can specify the number of paragraphs or words required, making it useful for design and development purposes.",
  //   icon: <TextFieldsIcon sx={{ color: "#d50000" }} />,
  //   path: "/lorem-ipsum-generator",
  // },
];
