import { Anchor, Text, Title } from '@mantine/core';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        Welcome to{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          My Mantine Testing Page
        </Text>
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        I'll be following tutorials from{' '}
        <Anchor href="https://mantine.dev/" size="lg">
        Mantine Docs
        </Anchor>
        {' '}to create this page.
      </Text>
    </>
  );
}
