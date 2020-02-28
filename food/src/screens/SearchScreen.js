import React, { useState } from 'react';
import { Text, ScrollView } from 'react-native';
import useResults from '../hooks/useResults';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, errorMessage, results] = useResults();

  const filterResultsByPrice = price => results.filter(result => result.price === price);

  return (
    <React.Fragment>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice('$')}
          title={'Cost Effective'}
        />
        <ResultsList
          results={filterResultsByPrice('$$')}
          title={'Bit Pricier'}
        />
        <ResultsList
          results={filterResultsByPrice('$$$')}
          title={'Big Spender'}
        />
      </ScrollView>
    </React.Fragment>
  );
};

export default SearchScreen;
