import React, { useEffect, useState, useRef } from "react";
import "../../components/app.scss";
import { sortBy } from 'lodash';
import axios from "axios";
import ScreenHomePage from './screen';

function _HomePage(props) {

	const [ data, setData ] = useState([]);
	const [ pagination, setPagination ] = useState({current: 1, pageSize: 7});
	const [ loading, setLoading ] = useState(false);

	const getRandomuserParams = params => {
		return {
		  results: params.pagination.pageSize,
		  page: params.pagination.current,
		  ...params,
		};
	};

	const fetch = async(params = {}) => {
		setLoading(true);
		const url = "https://virtserver.swaggerhub.com/swaggerpayment/GetDataBuilding/1.0.0/building_data";
		await axios.get(url).then(res => {
			console.log(res.data)
			setLoading(false);
			let sortedById = sortBy(res.data, 'id')
			setData(sortedById);
			setPagination({
				...params.pagination,
				total:res.data.length
			});
		})
	};

	const handleTableChange = (pagination, filters, sorter) => {
		fetch({
		  sortField: sorter.field,
		  sortOrder: sorter.order,
		  pagination,
		  ...filters,
		});
	};

	useEffect(() => {
    	fetch({ pagination });
	}, [])

	const tabHeader = [
		{
			title: '#',
			dataIndex: 'numberData',
			key: 'numberData',
		},
		{
			title: 'Nama',
			dataIndex: 'name',
			key: 'name',
		},
		{
			title: 'No. Telp',
			dataIndex: 'phone_number',
			key: 'phone_number',
		},
		{
			title: 'Alamat',
			dataIndex: 'address',
			key: 'address',
		},
		{
			title: 'Kapasitas',
			dataIndex: 'allowed_capacity',
			key: 'allowed_capacity',
		},
		{
			title: 'Lokasi',
			dataIndex: ['longitude', 'latitude'],
			sorter: true

		},
	]

  return (
		<ScreenHomePage
			rowKey={data => data.id}
			dataSource={data}
			pagination={pagination}
			loading={loading}
			onChange={handleTableChange}
			columns={tabHeader}
			{...props}
		/>
  )
}
export const HomePage = React.memo((_HomePage));
