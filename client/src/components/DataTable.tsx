import MaterialTable from "@material-table/core";
import BrowserNotSupportedIcon from "@mui/icons-material/BrowserNotSupported";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import IndeterminateCheckBoxOutlinedIcon from "@mui/icons-material/IndeterminateCheckBoxOutlined";
import { useEffect, useState } from "react";
import { publicapis } from "../services/api";

type IEntries = {
  API: string;
  Description: string;
  Auth: string;
  HTTPS: boolean;
  Cors: string;
  Link: string;
  Category: string;
};

type IResponse = {
  count: number;
  entries: IEntries[];
};

export default function DataTable() {
  const [entries, setEntries] = useState<IEntries[]>([]);

  useEffect(() => {
    const getAllEntries = async () => {
      try {
        const response = await publicapis.get<IResponse>("entries");
        setEntries(response.data.entries);
      } catch (error) {
        console.error(error);
      }
    };
    getAllEntries();
  }, []);

  return (
    <MaterialTable
      columns={[
        {
          field: "API",
          title: "Nome",
        },
        {
          field: "Description",
          title: "Descrição",
        },
        {
          field: "Category",
          title: "Categoria",
        },
        {
          field: "Auth",
          title: "Autorização",
          render: (rowData) =>
            rowData.Auth === "" ? (
              <IndeterminateCheckBoxOutlinedIcon />
            ) : (
              rowData.Auth
            ),
        },
        {
          field: "HTTPS",
          title: "HTTPS",
          render: (rowData) =>
            rowData.HTTPS ? (
              <CheckBoxOutlinedIcon />
            ) : (
              <BrowserNotSupportedIcon />
            ),
        },
        {
          field: "Cors",
          title: "CORS",
          render: (rowData) => {
            if (rowData.Cors === "yes") {
              return <CheckBoxOutlinedIcon />;
            } else if (rowData.Cors === "no") {
              return <BrowserNotSupportedIcon />;
            } else if (rowData.Cors === "unknown") {
              return <IndeterminateCheckBoxOutlinedIcon />;
            }
          },
        },
        {
          field: "Link",
          title: "Link",
        },
      ]}
      data={entries}
      options={{}}
    />
  );
}
