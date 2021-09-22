import Footer from "@components/footer";
import Header from "@components/header/header";

const Layout: React.FC = ({ children }) => (
  <div className="min-h-screen px-8 py-4 flex flex-col text-grey">
    <Header />
    <main className="container lg:max-w-screen-lg mx-auto py-4">
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;
