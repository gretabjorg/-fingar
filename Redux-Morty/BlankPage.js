import React, { useState } from "react";

// ui
import { Page, PageContent } from "../components/ui/page";
import { Card, CardTitle, CardBlock } from "../components/ui/Card";
import { Row, Col } from "../components/ui/Grid";
import { connect, useDispatch, useSelector } from "react-redux";
import { fetchBees, FETCH_BEES } from "../api/bees/redux";

function BlankPage({ getMorty, morty, error, loading }) {
  console.log("its reduxulus", { getMorty, morty, error, loading });
  return (
    <Page>
      <PageContent>
        <Row center>
          <Col size={12} md={6}>
            <Card>
              <CardBlock>
                <CardTitle title="Titill" />
                <FetchButton />
                <Morty morty={morty} />
              </CardBlock>
            </Card>
          </Col>
        </Row>
      </PageContent>
    </Page>
  );
}

function FetchButton(props) {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => {
        dispatch(fetchBees());
      }}
    >
      Portal!
    </button>
  );
}
function Morty(props) {
  const morty = props.morty;
  const loading = useSelector((state) => state.bees.loading);
  const error = useSelector((state) => state.bees.error);

  if (error) {
    return <p>{error}</p>;
  }
  if (!loading && !morty) {
    return <p>Click portal too summon morty</p>;
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  return <pre>{JSON.stringify(morty, null, 2)}</pre>;
}

function mapStateToProps(state) {
  return {
    morty: state.bees.morty,
    loading: state.bees.loading,
    error: state.bees.error,
  };
}

const mapDispatchToProps = {
  getMorty: { type: FETCH_BEES },
};

export default connect(mapStateToProps, mapDispatchToProps)(BlankPage);
