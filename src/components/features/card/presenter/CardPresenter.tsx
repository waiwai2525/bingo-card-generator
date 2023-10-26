import {
  Button,
  Statistic,
  Segment,
  Grid,
  List,
  Header,
} from "semantic-ui-react";

import { Pep } from "../bingo.type.ts";

type Props = {
  pep?: Pep;
  peps: Pep[];
  onPick: () => void;
};

export const CardPresenter = ({ pep, peps, onPick }: Props) => {
  return (
    <Grid columns={1} padded>
      <Grid.Row>
        <Grid.Column>
          <Segment raised>
            <Grid textAlign="center" columns={2} divided>
              <Grid.Row style={{ height: "123px" }}>
                <Grid.Column>
                  <Statistic color={pep?.color}>
                    <Statistic.Value style={{ width: "1ch" }}>
                      {pep?.ident}
                    </Statistic.Value>
                  </Statistic>
                  <Statistic size="huge">
                    <Statistic.Value style={{ width: "2ch" }}>
                      {pep?.number}
                    </Statistic.Value>
                  </Statistic>
                </Grid.Column>
                <Grid.Column verticalAlign="middle">
                  <Button onClick={onPick} size="massive">
                    PICK
                  </Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column stretched>
          <Segment raised>
            <Grid textAlign="center" columns={5} divided>
              <Grid.Row style={{ height: "384px" }}>
                <Grid.Column>
                  <Header size="small" color="red">
                    B
                  </Header>
                  <List>
                    {peps
                      .filter((pep) => pep.ident == "B")
                      .filter((pep) => pep.isActive)
                      .map((pep) => {
                        return <List.Item>{pep.number}</List.Item>;
                      })}
                  </List>
                </Grid.Column>
                <Grid.Column>
                  <Header size="small" color="purple">
                    I
                  </Header>
                  <List>
                    {peps
                      .filter((pep) => pep.ident == "I")
                      .filter((pep) => pep.isActive)
                      .map((pep) => {
                        return <List.Item>{pep.number}</List.Item>;
                      })}
                  </List>
                </Grid.Column>
                <Grid.Column>
                  <Header size="small" color="blue">
                    N
                  </Header>
                  <List>
                    {peps
                      .filter((pep) => pep.ident == "N")
                      .filter((pep) => pep.isActive)
                      .map((pep) => {
                        return <List.Item>{pep.number}</List.Item>;
                      })}
                  </List>
                </Grid.Column>
                <Grid.Column>
                  <Header size="small" color="green">
                    G
                  </Header>
                  <List>
                    {peps
                      .filter((pep) => pep.ident == "G")
                      .filter((pep) => pep.isActive)
                      .map((pep) => {
                        return <List.Item>{pep.number}</List.Item>;
                      })}
                  </List>
                </Grid.Column>
                <Grid.Column>
                  <Header size="small" color="yellow">
                    O
                  </Header>
                  <List>
                    {peps
                      .filter((pep) => pep.ident == "O")
                      .filter((pep) => pep.isActive)
                      .map((pep) => {
                        return <List.Item>{pep.number}</List.Item>;
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
