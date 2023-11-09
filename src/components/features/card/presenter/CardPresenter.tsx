import {Grid, Header, List, Segment,} from "semantic-ui-react";


type Props = {
    bs: number[];
    is: number[];
    ns: number[];
    gs: number[];
    os: number[];
};

export const CardPresenter = ({bs, is, ns, gs, os}: Props) => {
    return (
        <Grid columns={1} padded>
            <Grid.Row>
                <Grid.Column stretched>
                    <Segment raised>
                        <Grid textAlign="center" columns={5}>
                            <Grid.Row style={{padding: "8px"}}>
                                <Grid.Column style={{padding: "4px"}}>
                                    <Header size="medium" color="red">
                                        B
                                    </Header>
                                    <List>
                                        {bs.map((number) => {
                                            return (
                                                <Segment style={{borderColor: "#B03060", height: "48px"}}>
                                                    <List.Item>
                                                        <Header size='medium'>{number}</Header>
                                                    </List.Item>
                                                </Segment>
                                            )
                                        })}
                                    </List>
                                </Grid.Column>
                                <Grid.Column style={{padding: "4px"}}>
                                    <Header size="medium" color="purple">
                                        I
                                    </Header>
                                    <List>
                                        {is.map((number) => {
                                            return (
                                                <Segment style={{borderColor: "#B413EC", height: "48px"}}>
                                                    <List.Item>
                                                        <Header size='medium'>{number}</Header>
                                                    </List.Item>
                                                </Segment>
                                            )
                                        })}
                                    </List>
                                </Grid.Column>
                                <Grid.Column style={{padding: "4px"}}>
                                    <Header size="medium" color="blue">
                                        N
                                    </Header>
                                    <List>
                                        {ns.map((number, index) => {
                                            return (
                                                <Segment style={{borderColor: "#0E6EB8", height: "48px"}}>
                                                    <List.Item>
                                                        {index === 2
                                                            ? <Header size='small'>Free</Header>
                                                            : <Header size='medium'>{number}</Header>
                                                        }
                                                    </List.Item>
                                                </Segment>
                                            )
                                        })}
                                    </List>
                                </Grid.Column>
                                <Grid.Column style={{padding: "4px"}}>
                                    <Header size="medium" color="green">
                                        G
                                    </Header>
                                    <List>
                                        {gs.map((number) => {
                                            return (
                                                <Segment style={{borderColor: "#016936", height: "48px"}}>
                                                    <List.Item>
                                                        <Header size='medium'>{number}</Header>
                                                    </List.Item>
                                                </Segment>
                                            )
                                        })}
                                    </List>
                                </Grid.Column>
                                <Grid.Column style={{padding: "4px"}}>
                                    <Header size="medium" color="yellow">
                                        O
                                    </Header>
                                    <List>
                                        {os.map((number) => {
                                            return (
                                                <Segment style={{borderColor: "#FFD700", height: "48px"}}>
                                                    <List.Item>
                                                        <Header size='medium'>{number}</Header>
                                                    </List.Item>
                                                </Segment>
                                            )
                                        })}
                                    </List>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};
