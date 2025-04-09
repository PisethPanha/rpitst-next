import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./react/components/Navbar";
import Footer from "./react/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "rpitst elibrary",
  description: "Welcome to our RPITST E-Library, a digital platform dedicated to providing students with unlimited access to educational resources. Our mission is to make learning more accessible, convenient, and efficient for students of all backgrounds. With a vast collection of books, research papers, articles, and academic materials, RPITST E-Library serves as a valuable resource for students looking to enhance their knowledge and excel in their studies. We strive to bridge the gap between students and quality learning materials by offering a user-friendly interface, powerful search functionalities, and seamless access to digital content. RPITST E-LIBRARY platform supports multiple categories, including literature, science, history, technology, and more. Whether you are conducting research, preparing for exams, or expanding your knowledge, RPITST E-Library is here to assist you every step of the way. Join RPITST E-Library today and embark on a journey of knowledge and discovery!,សូមស្វាគមន៍មកកាន់បណ្ណាល័យអេឡិចត្រូនិករបស់វិទ្យាស្ថានបណ្ដុះបណ្ដាលពហុបច្ចេកទេសភូមិភាគតេជោសែនតាកែវ ដែលជាវេទិកាឌីជីថលឧទ្ទិសដល់ការផ្ដល់ឱ្យនិស្សិតនូវការចូលប្រើប្រាស់ធនធានសិក្សាដោយគ្មានដែនកំណត់។ បេសកកម្មរបស់យើងគឺដើម្បីធ្វើឱ្យការរៀនសូត្រងាយស្រួល និងមានប្រសិទ្ធភាពសម្រាប់និស្សិតគ្រប់រូប។ ដោយមានការប្រមូលផ្ដុំសៀវភៅ បទពិសោធន៍ស្រាវជ្រាវ អត្ថបទ និងឯកសារប្រឡងច្រើនប្រភេទ បណ្ណាល័យអេឡិចត្រូនិករបស់វិទ្យាស្ថានបណ្ដុះបណ្ដាលពហុបច្ចេកទេសភូមិភាគតេជោសែនតាកែវក្លាយជាធនធានដ៏មានតម្លៃសម្រាប់និស្សិតដែលចង់បង្កើនចំណេះដឹង និងប្រសើរឡើងក្នុងការសិក្សា។ យើងខិតខំអភិវឌ្ឍមុខងារស្វែងរកដ៏មានឥទ្ធិពល និងផ្តល់នូវបទពិសោធន៍ប្រើប្រាស់ងាយស្រួលសម្រាប់អ្នករៀន។ វេទិការបស់យើងគាំទ្រសៀវភៅជាច្រើនប្រភេទ រួមមានអក្សរសាស្រ្ត វិទ្យាសាស្រ្ត ប្រវត្តិសាស្រ្ត បច្ចេកវិទ្យា និងផ្សេងៗទៀត។ មិនថាអ្នកកំពុងស្រាវជ្រាវ រៀបចំសម្រាប់ការប្រឡង ឬបង្កើនចំណេះដឹងរបស់អ្នក ក៏បណ្ណាល័យអេឡិចត្រូនិករបស់វិទ្យាស្ថានបណ្ដុះបណ្ដាលពហុបច្ចេកទេសភូមិភាគតេជោសែនតាកែវនៅទីនេះដើម្បីជួយអ្នកគ្រប់ជំហាន។ ចូលរួមជាមួយយើងថ្ងៃនេះ ដើម្បីចាប់ផ្តើមដំណើរស្វែងរកចំណេះដឹងថ្មីៗ!",
  verification: {
    google: "25BReDN8kEZKLhepDXdmBiA9awH4ORf37ssAZXSfUuE",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       <Navbar/> 
        {children}
        <Footer/>
      </body>
    </html>
  );
}
