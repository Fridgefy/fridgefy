import "@/styles/sidebar.css";

type Props = {
  title: string
};

const SideBarTitle = ({ title }: Props) => (
  <p className="text-center text-muted font-bold text-2xl mb-8 sidebar-title">
    {title}
  </p>
)

export default SideBarTitle;
