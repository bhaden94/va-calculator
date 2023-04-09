import { CSVRow } from "../model/EntitlementModel";
import styles from "../styles/Home.module.css";
import { getLocalCSVData } from "../utility/localData";

const CSVData = ({ data }: CSVProps) => {
	return (
		<>
			<main className={styles.main}>
				<div>
					<p>{data[0].state}</p>
					<p>{data[0].county}</p>
					<p>{data[0].zipCode}</p>
					<p>{data[0].entitlement}</p>
				</div>
			</main>
		</>
	);
};

export async function getStaticProps() {
	const localData = await getLocalCSVData();

	return { props: { data: localData } };
}

interface CSVProps {
	data: CSVRow[];
}

export default CSVData;
