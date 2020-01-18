import React, {Component} from 'react';
import {DataSearch, ReactiveBase, ReactiveList, ResultList, SelectedFilters} from '@appbaseio/reactivesearch';
import './App.css';

const { ResultListWrapper } = ReactiveList;

class App extends Component {
    render() {
        return (
            <div className="main-container">
            <ReactiveBase
        app="steam-search"
        url="http://localhost:9200"
        credentials="elastic:changeme"
            >
            <DataSearch
        componentId="title"
        dataField={["ResponseName"]}
        queryFormat="and"
            />
            <SelectedFilters/>
            <ReactiveList
        componentId="resultLists"
        dataField="ResponseName"
        size={10}
        pagination={true}
        react={{
            "and": ["title"]
        }}
    >
        {({data}) => (
            <ResultListWrapper>
            {
                data.map(item => (
                    <ResultList key={item._id}>
                <ResultList.Content>
                <ResultList.Title
                dangerouslySetInnerHTML={{
            __html: item.ResponseName
        }}
            />
            </ResultList.Content>
            </ResultList>
        ))
        }
        </ResultListWrapper>
        )}
    </ReactiveList>
        </ReactiveBase>
        </div>
    );
    }
}

export default App;
