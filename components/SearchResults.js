import React from 'react';
import PaginationButtons from './PaginationButtons';

const SearchResults = ({ results }) => 
{
    return (
        <div className='mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52'>
            <p className='text-gray-600 text-md mb-5 mt-3'>
                About {results.searchInformation?.formattedTotalResults} results ({results.searchInformation?.formattedSearchTime} seconds)
            </p>

            {results.items?.map((x) => (
                <div key={x.link} className='max-w-xl mb-8'>
                    <div className='group'>
                        <a href={x.link} className="text-sml">{x.formattedUrl}</a>
                        <a href={x.link}>
                            <h2 className='truncate text-xl text-blue-800 font-medium group-hover:underline'>{x.title}</h2>
                        </a>
                    </div>

                    <p className='line-clamp-2'>{x.snippet}</p>
                </div>
            ))}

            <PaginationButtons />
        </div>
    )
};

export default SearchResults;
// 2:57:54