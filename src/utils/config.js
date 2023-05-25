import PasswordIcon from "@mui/icons-material/Password";
import CalculateIcon from "@mui/icons-material/Calculate";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import CompressIcon from "@mui/icons-material/Compress";
import DriveFileMoveIcon from "@mui/icons-material/DriveFileMove";
import CodeIcon from "@mui/icons-material/Code";
import AutoModeIcon from "@mui/icons-material/AutoMode";
import ShutterSpeedIcon from "@mui/icons-material/ShutterSpeed";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import TextFieldsIcon from "@mui/icons-material/TextFields";

export const config = [
  {
    title: "Password Generator",
    subTitle:
      "A tool that generates strong and secure passwords based on specified criteria, such as length, inclusion of special characters, or randomization.",
    icon: <PasswordIcon color="primary" />,
  },
  {
    title: "BMI Calculator",
    subTitle:
      "A Body Mass Index (BMI) calculator that allows users to input their height and weight and calculates their BMI, providing information on whether they fall into underweight, normal weight, overweight, or obese categories.",
    icon: <CalculateIcon sx={{ color: "#f44336" }} />,
  },
  {
    title: "Currency Converter",
    subTitle:
      "A tool that converts between different currencies using real-time exchange rates. Users can input the amount in one currency and see the equivalent amount in another currency.",
    icon: <CurrencyExchangeIcon sx={{ color: "#4caf50" }} />,
  },
  {
    title: "Image Compressor",
    subTitle:
      "An image compression tool that allows users to upload images and compress them to reduce file size without significant loss of quality. This can be helpful for optimizing images for websites or sharing them online.",
    icon: <CompressIcon sx={{ color: "#673ab7" }} />,
  },
  {
    title: "File Converter",
    subTitle:
      "A file conversion tool that supports converting various file formats, such as document formats (PDF to Word), image formats (JPG to PNG), audio formats (MP3 to WAV), or video formats (MP4 to GIF).",
    icon: <DriveFileMoveIcon sx={{ color: "#00838f" }} />,
  },
  {
    title: "Markdown Editor",
    subTitle:
      "a Markdown editor that provides a user-friendly interface for writing and previewing Markdown-formatted text. Users can create formatted content and export it to HTML or other formats.",
    icon: <CodeIcon sx={{ color: "#3f51b5" }} />,
  },
  {
    title: "PX to REM",
    subTitle:
      "A tool that converts pixels to the CSS unit REM. The conversion is based on the default font-size of 16 pixel, but can be changed.",
    icon: <AutoModeIcon sx={{ color: "#e91e63" }} />,
  },
  {
    title: "Pomodoro Timer",
    subTitle:
      "A a Pomodoro technique timer that helps users manage their time and improve productivity. It includes adjustable work and break intervals, notifications, and tracking features",
    icon: <ShutterSpeedIcon sx={{ color: "#18ff" }} />,
  },
  {
    title: "QR Code Generator",
    subTitle:
      "A tool that generates QR codes from text, URLs, or contact information. Users can input their desired content, and the tool generates a scannable QR code that can be used for various purposes.",
    icon: <QrCodeScannerIcon sx={{ color: "#4caf50" }} />,
  },
  {
    title: "Password Strength Checker",
    subTitle:
      "A tool that assesses the strength of a password entered by the user. It can analyze factors like length, complexity, and common patterns to provide feedback on the password's strength.",
    icon: <VpnKeyIcon sx={{ color: "#c51162" }} />,
  },
  {
    title: "Lorem Ipsum Generator",
    subTitle:
      "A utility that generates placeholder text in the form of Lorem Ipsum. Users can specify the number of paragraphs or words required, making it useful for design and development purposes.",
    icon: <TextFieldsIcon sx={{ color: "#d50000" }} />,
  },
];
