import { Table, Switch } from 'antd';
import { getClient } from '../../Utils/apiRequest'
import { useEffect, useState } from 'react'

function ListContent() {
    const [client, setClient] = useState(null);

    useEffect(() => {
        const getClients = async () => {
            const data = await getClient()
            const cData = data.map(element => ({ key: element.id, ...element }))
            setClient(cData);
        }
        if (client === null) {
            getClients();
        }
    }, [client])


    const columns = [
        {
            title: 'Prospective Client Name',
            dataIndex: 'name',
            sorter: {
                compare: (a, b) => a.name.localeCompare(b.name),
                multiple: 6,
            }
        },
        {
            title: 'Title',
            dataIndex: 'title',
            sorter: {
                compare: (a, b) => a.title.localeCompare(b.title),
                multiple: 3,
            },
        },
        {
            title: 'Email',
            dataIndex: 'email',
            sorter: {
                compare: (a, b) => a.email - b.email,
                multiple: 2,
            },
        },
        {
            title: 'Location',
            dataIndex: 'location',
            sorter: {
                compare: (a, b) => a.location - b.location,
                multiple: 1,
            },
        }, {
            title: 'Last Interaction',
            dataIndex: 'lastInteraction',
            sorter: {
                compare: (a, b) => a.lastInteraction - b.lastInteraction,
                multiples: 4,
            },
        }, {
            title: 'Nurturing',
            dataIndex: 'nurturing',
            render: (a) => {
                return <Switch checked={a} />
            }

        }, {
            title: 'Growth Status',
            dataIndex: 'growthStatus',
            sorter: {
                compare: (a, b) => a.growthStatus - b.growthStatus,
                multiples: 7,
            },
        }
    ];

    function onChange(pagination, filters, sorter, extra) {
        console.log('params', pagination, filters, sorter, extra);
    }

    return (
        <Table columns={columns} dataSource={client} onChange={onChange} />
    )
}
export default ListContent;