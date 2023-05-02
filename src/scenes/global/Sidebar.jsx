import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { Box, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

// const Item = ({ title, to, icon, selected, setSelected }) => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
//   return (
//     <MenuItem
//       active={selected === title}
//       style={{
//         color: colors.grey[100],
//       }}
//       onClick={() => setSelected(title)}
//       icon={icon}
//     >
//       <Typography>{title}</Typography>
//       <Link to={to} />
//     </MenuItem>
//   );
// };

const SidebarCustom = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  // const [isCollapsed, setIsCollapsed] = useState(false);
  // const [selected, setSelected] = useState("Dashboard");
  const { collapseSidebar } = useProSidebar();

  return (
    <div style={{ display: "flex", height: "100%" }}>
      <Box
        onClick={() => collapseSidebar()}
        sx={{
          "& .pro-sidebar-inner": {
            backgroundColor: `${colors.primary[400]} !important`,
          },
          "& .pro-icon-wrapper": {
            backgroundColor: "transparent !important",
          },
          "& .pro-inner-item": {
            padding: "5px 35px 5px 20px !important",
          },
          "& .pro-inner-item:hover": {
            color: "#868dfb !important",
          },
          "& .pro-menu-item.active": {
            color: "#6870fa !important",
          },
        }}
      >
        <Sidebar>
          <Menu iconShape="square">
            <MenuItem
              icon={<MenuOutlinedIcon />}
              style={{
                margin: "10px 0 20px 0",
                color: colors.grey[100],
              }}
            >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMINS
                </Typography>
              </Box>
            </MenuItem>
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="50px"
                  height="50px"
                  src={`../../assets/user.png`}
                  style={{ cursor: "pointer", borderRadius: "20%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h4"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Natashechka
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[100]}>
                  Admin
                </Typography>
              </Box>
            </Box>
            <Box>
              <MenuItem icon={<HomeOutlinedIcon />} component={<Link to="/" />}>
                Dashboard
              </MenuItem>
              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
              >
                Data
              </Typography>
              <MenuItem
                to="/team"
                icon={<PeopleOutlinedIcon />}
                component={<Link to="/team" />}
              >
                Manage Team
              </MenuItem>
              <MenuItem
                icon={<ContactsOutlinedIcon />}
                component={<Link to="/contacts" />}
              >
                Contacts Information
              </MenuItem>
              <MenuItem
                icon={<ReceiptOutlinedIcon />}
                component={<Link to="/invoices" />}
              >
                Invoices Balances
              </MenuItem>
              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
              >
                Pages
              </Typography>
              <MenuItem
                icon={<PersonOutlinedIcon />}
                component={<Link to="/form" />}
              >
                Profile Form
              </MenuItem>
              <MenuItem
                icon={<CalendarTodayOutlinedIcon />}
                component={<Link to="/calendar" />}
              >
                Calendar
              </MenuItem>
              <MenuItem
                icon={<HelpOutlineOutlinedIcon />}
                component={<Link to="/faq" />}
              >
                FAQ Page
              </MenuItem>
              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
              >
                Charts
              </Typography>
              <MenuItem
                icon={<BarChartOutlinedIcon />}
                component={<Link to="/bar" />}
              >
                Bar Chart
              </MenuItem>
              <MenuItem
                icon={<PieChartOutlineOutlinedIcon />}
                component={<Link to="/pie" />}
              >
                Pie Chart
              </MenuItem>
              <MenuItem
                icon={<TimelineOutlinedIcon />}
                component={<Link to="/line" />}
              >
                Line Chart
              </MenuItem>
              <MenuItem
                icon={<MapOutlinedIcon />}
                component={<Link to="/geography" />}
              >
                Geography Chart
              </MenuItem>
            </Box>
          </Menu>
        </Sidebar>
      </Box>
    </div>
  );
};

export default SidebarCustom;
