import React from 'react';

class Search extends React.Component {
	state = {
		search: '',
		type: '',
	};

	handleRadio = (e) => {
		this.setState({ type: e.target.value }, () => {
			this.props.handleSearch(this.state.search, this.state.type);
		});
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
							handleSearch(this.state.search, this.state.type);
						}
					}}
				/>
				<button
					className='search__button'
					onClick={() => {
						if (this.state.search) {
							handleSearch(this.state.search, this.state.type);
						}
					}}>
					Search
				</button>
				<div className='search__type'>
					<label>
						<input
							className='search__radio'
							type='radio'
							value=''
							onChange={this.handleRadio}
							checked={this.state.type === ''}
							name='filter'
						/>
						All
					</label>
					<label>
						<input
							className='search__radio'
							type='radio'
							value='movie'
							onChange={this.handleRadio}
							checked={this.state.type === 'movie'}
							name='filter'
						/>
						Movie
					</label>
					<label>
						<input
							className='search__radio'
							type='radio'
							value='series'
							onChange={this.handleRadio}
							checked={this.state.type === 'series'}
							name='filter'
						/>
						Series
					</label>
				</div>
			</div>
		);
	}
}

export { Search };
