import React from 'react';

class Search extends React.Component {
	state = {
		search: '',
	};

	render() {
		const { handleSearch } = this.props;
		return (
			<div className='search'>
				<input
					type='search'
					placeholder='Search'
					className='search__input'
					value={this.state.search}
					onChange={(e) => this.setState({ search: e.target.value })}
					onKeyDown={(e) => {
						if (e.key === 'Enter') {
							handleSearch(this.state.search);
						}
					}}
				/>
				<button
					className='search__button'
					onClick={() => {
						if (this.state.search) {
							handleSearch(this.state.search);
						}
					}}>
					Search
				</button>
			</div>
		);
	}
}

export { Search };
