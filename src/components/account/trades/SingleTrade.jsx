import { Button, Group, Title } from '@mantine/core'
import React from 'react'
import { useParams } from 'react-router-dom'
import TransactionTable from '../../TransactionTable/TableTransaction'

const SingleTrade = () => {
    const {id} = useParams()
  return (
    <div>
        <Group position="apart" mb="md">
            <Title order={3} style={{textTransform: "capitalize"}}>{id}</Title>
              <Button
                color="blue"
                radius="xl"
                size="md"
                px="xl"
              >
                Make Payment
              </Button>
            </Group>
            <TransactionTable/>
    </div>
  )
}

export default SingleTrade