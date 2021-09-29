import React from "react";
// import AllRFP from "./AllRFP";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NameandSearchInput from "../NameandSearchInput";
import Filter from "../filter";
import "../../css/sales.css";
import {
	Button,
	Dialog,
	Card,
	Typography,
	DialogActions,
	DialogContent,
	DialogTitle,
} from "@material-ui/core";
import company from "../../css/images/company.jpg";
import "../../css/table.scss";
import Slide from "@material-ui/core/Slide";
import { withRouter, useHistory } from "react-router-dom";
import FirstRadio from "./firstRadio";
import SecondRadio from "./secondRadio";
import ProfileImage from "../../css/images/downloadProfile.png";
import SearchIpnut from "./SearchInput";
import "./createNew.css";
import { useDispatch, connect } from "react-redux";
import prfile from "../../css/images/prfile.png";
import mark from "../../css/images/mark.png";
import CreateNewTable from "./createNewTable";
import CrmComtactModal from "./CrmComtactModal";
import Company from "./Company/Index";
import Individual from "./Individual/Index";
import { getCustomer } from "../../_action/Constumer";
import LeadForm from "./LeadForm";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction='up' ref={ref} {...props} />;
});

function Index(props) {
	const dispatch = useDispatch();
	let history = useHistory();
	const [order, setOrder] = React.useState("asc");
	const [orderBy, setOrderBy] = React.useState("");
	const [tableName, setTableName] = React.useState("");
	const [open, setOpen] = React.useState(false);
	const [openTwo, setOpentwo] = React.useState(false);
	const [openThree, setOpenthree] = React.useState(false);
	const [openfour, setOpenfour] = React.useState(false);
	const [values, setValues] = React.useState({});
	const [pop, setPop] = React.useState(false);

	const handleProps = (data) => {
		setTableName(data);

		const isAsc = orderBy === data && order === "asc";
		setOrder(isAsc ? "desc" : "asc");
		setOrderBy(data);
	};

	const handleClickOpen = () => {
		setOpen(true);
	};

	const arrayOfValues = [
		"Prospect Name",
		"Prospect Type",
		"Company",
		"Product",
		"Budget",
		"Authority",
		"Time",
		"Total",
	];

	const handleClose = () => {
		setOpen(false);
	};

	const handleCloseTwo = () => {
		setOpentwo(false);
	};

	const handleClosethree = () => {
		setOpenthree(false);
	};

	const handleClosefour = () => {
		setOpenfour(false);
	};

	const handleGenerate = () => {
		let value = "customer";
		dispatch(getCustomer(value));
		setOpen(false);
		setOpentwo(true);
		// alert("dainel");
	};

	const handleChange = (e, name) => {
		const newValues = { ...values };
		newValues[name] = e.target.value;
		setValues(newValues);
	};

	const handleGeneralButton = () => {
		setOpen(false);
		setPop(true);
	};

	const handlepop = () => {
		setPop(false);
	};

	return (
		<div>
			<Dialog
				open={pop}
				keepMounted
				onClose={handlepop}
				aria-labelledby='alert-dialog-slide-title'
				aria-describedby='alert-dialog-slide-description'
				className='modalSend'
			>
				<DialogTitle>Save Generated Leads</DialogTitle>
				<DialogContent>
					<p>Would you like to save these leads as contacts?</p>
				</DialogContent>
				<DialogActions>
					<div className='d-flex justify-content-center'>
						<Button variant='contained' color='primary'>
							No
						</Button>
						<Button variant='contained' color='primary'>
							Yes
						</Button>
					</div>
				</DialogActions>
			</Dialog>
			<Dialog
				open={openTwo}
				keepMounted
				onClose={handleCloseTwo}
				aria-labelledby='alert-dialog-slide-title'
				aria-describedby='alert-dialog-slide-description'
				className='modalSend'
			>
				<CrmComtactModal
					setOpen={setOpentwo}
					setOpentwo={setOpentwo}
					setOpenthree={setOpenthree}
					setOpenfour={setOpenfour}
				/>
			</Dialog>
			<Dialog
				open={openThree}
				fullWidth
				keepMounted
				onClose={handleClosethree}
				aria-labelledby='alert-dialog-slide-title'
				aria-describedby='alert-dialog-slide-description'
				className='modalSend'
			>
				<DialogTitle className='text-center p-5'>
					<b className='underLineText'>Contact Generation Form</b>
				</DialogTitle>
				<div className='allnew d-flex justify-content-center'>
					<img src={prfile} width='30' height='40' />
					<div className='text-center'>
						<b>Contact Type</b>
					</div>
					<select
						onChange={(e) => handleChange(e, "individual")}
						style={{ maxHeight: "40px" }}
					>
						<option value='Individual'>Individual</option>
						<option value='Organization'>Organization</option>
					</select>
				</div>
				<Individual handleClosetwo={handleClosethree} />
			</Dialog>
			<Dialog
				open={openfour}
				keepMounted
				onClose={handleClosefour}
				aria-labelledby='alert-dialog-slide-title'
				aria-describedby='alert-dialog-slide-description'
				className='modalSend'
			>
				<DialogTitle className='text-center p-5'>
					<b className='underLineText'>Contact Generation Form</b>
				</DialogTitle>
				<div className='allnew d-flex justify-content-center'>
					<img src={company} width='30' height='40' />
					<div className='text-center'>
						<b>Contact Type</b>
					</div>
					<select
						onChange={(e) => handleChange(e, "individual")}
						style={{ maxHeight: "40px" }}
					>
						<option value='Individual'>Individual</option>
						<option value='Organization'>Organization</option>
					</select>
				</div>
				<Company handleClosethree={handleClosefour} />
			</Dialog>
			<LeadForm
				open={open}
				handleClose={handleClose}
				Transition={Transition}
				setOpen={setOpen}
				setPop={setPop}
				setOpentwo={setOpentwo}
				setOpenfour={setOpenfour}
			/>
			<div className='property-area pt-5'>
				<div className='container'>
					<div>
						<span onClick={history.goBack}>
							<FontAwesomeIcon
								style={{
									color: "#3c44b1",
									width: "50",
									height: "30",
								}}
								icon={["fas", "arrow-circle-left"]}
							/>
						</span>
						<br />
						<div
							style={{
								display: "flex",
								alignContent: "space-between",
							}}
							className='box mt-4'
						>
							<div style={{ float: "left" }}>
								<Typography variant='h5' noWrap>
									<b style={{ color: "#3c44b1" }}>
										Lead Qualification
									</b>
								</Typography>
							</div>
							<div
								className='box overlay'
								style={{ marginLeft: "150px" }}
							>
								<SearchIpnut />
							</div>
						</div>
						{/* <NameandSearchInput /> */}
						<div className='mt-4'>
							<Button
								onClick={handleClickOpen}
								variant='contained'
								color='primary'
								style={{ width: "20%" }}
							>
								Create New
							</Button>
							<Filter
								arrayOfValues={arrayOfValues}
								onProp={handleProps}
							/>
						</div>
					</div>
					<div>
						<CreateNewTable />
					</div>
				</div>
			</div>
		</div>
	);
}


function Post() {
	const [header, setHeader] = React.useState([
		<th>Rand Header 0</th>,
	]);

	const [body, setBody] = React.useState([
		<td>Item 0</td>,
	]);

	const [id, setId] = React.useState('1');
	const [removeId, setRemoveId] = React.useState('');

	React.useEffect(() => {}, [header, body]);

	function addTableColumn() {
		setHeader([...header, <th>Header {id}</th>]);
		setBody([...body, <td>Item {id}</td>,]);

		setId(String(Number(id) + 1));
	}

	function removeTableColumn() {
		let newHeader = header.filter(item => String(header.indexOf(item)) != removeId)
		let newBody = body.filter(item => String(body.indexOf(item)) != removeId)

		setHeader(newHeader);
		setBody(newBody);
	}
	return (
		<>
			<table className='border'>
				<tr>{header}</tr>

				<tr>{body}</tr>
			</table>

			<button onClick={addTableColumn}>Add Col</button>

			<div className="flex flex-row my-10">
				<div>Enter Col id</div>
				<input type="text" onChange={(e) => setRemoveId(e.target.value)} />
			</div>

			<button onClick={removeTableColumn}>Remove Col</button>
		</>
	);
}

export default withRouter(connect(null, { getCustomer })(Post));
