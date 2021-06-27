import IconButton from "@material-ui/core/IconButton";
import ArrowBackOutlined from "@material-ui/icons/ArrowBackOutlined";
import { useRouter } from "next/dist/client/router";
import { FC } from "react";

type TopNavigationT = { title: string };

const TopNavigation: FC<TopNavigationT> = ({ title }) => {
  const router = useRouter();
  return (
    <div className="mt-2 relative">
      <IconButton
        onClick={router.back}
        aria-label="back"
        color="primary"
        className="p-0 absolute top-2/4 left-2 transform -translate-y-1/2"
      >
        <ArrowBackOutlined />
      </IconButton>
      <div className="text-center text-2xl font-semibold">{title}</div>
    </div>
  );
};

export default TopNavigation;
