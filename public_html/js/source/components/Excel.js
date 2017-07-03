import Rating from './Rating';
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Excel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.initialData,
      sortby: null,
      descending: false,
      edit: null,
      search: false
    };
    this.displayName = 'Excel';
    this._preSearchData = null;
    this._log = [];
  }

  _sort(e) {
    var column = e.target.cellIndex;
    var data = this.state.data.slice();
    var descending =
      this.state.sortby === column &&
        !this.state.descending;
    data.sort(function (a, b) {
      return descending ?
        (a[column] < b[column] ? 1 : -1) :
        (a[column] > b[column] ? 1 : -1);
    });
    this._logSetState({
      data: data,
      sortby: column,
      descending: descending
    });
    return 1;
  }

  _showEditor(e) {
    this._logSetState({
      edit: {
        row: parseInt(e.target.dataset.row, 10),
        cell: e.target.cellIndex
      }
    });
  }

  _save(e) {
    e.preventDefault();
    var input = e.target.firstChild;
    var data = this.state.data.slice();
    data[this.state.edit.row][this.state.edit.cell] = input.value;
    this._logSetState({
      edit: null,
      data: data
    });
  }

  _renderToolbar() {
    return (
      <div className="toolbar">
        <button onClick={this._toggleSearch}>Suchen</button>
        <a onClick={this._download.bind(this, 'json')}
          href="data.json">Export JSON</a>
        <a onClick={this._download.bind(this, 'csv')}
          href="data.csv">Export CSV</a>
      </div>
    );
  }

  _download(format, ev) {
    var contents = format === 'json'
      ? JSON.stringify(this.state.data)
      : this.state.data.reduce(function (result, row) {
        return result
          + row.reduce(function(rowresult, cell, idx) {
              return rowresult
                + '"'
                + cell.replace(/"/g, '""')
                + '"'
                + (idx < row.length -1 ? ';' : '');
          }, '')
        + "\n";
      }, '');
    var URL = window.URL || window.webkitURL;
    var blob = new Blob([contents], {type: 'text/' + format});
    ev.target.href = URL.createObjectURL(blob);
    ev.target.download = 'data.' + format;
  }

  _renderSearch() {
    if (! this.state.search) {
      return null;
    }
    return (
      <tr onChange={this._search}>
        {
          this.props.headers.map(function(_ignore, idx) {
            return (<td key={idx}>
              <input type="text" data-idx={idx} />
            </td>);
          })
        }
      </tr>
    );
  }

  _toggleSearch() {
    if (this.state.search) {
      this._logSetState({
        data: this._preSearchData,
        search: false
      });
      this._preSearchData = null;
    } else {
      this._preSearchData = this.state.data;
      this._logSetState({
        search: true
      });
    }
  }

  _search(e) {
    var needle = e.target.value.toLowerCase();
    if (! needle) {
      this._logSetState({data: this._preSearchData});
      return;
    }
    var idx = e.target.dataset.idx;
    var searchdata = this._preSearchData.filter(function (row) {
      return row[idx].toString().toLowerCase().indexOf(needle) > -1;
    });
    this._logSetState({data: searchdata});
  }



  _logSetState(newState) {
    //alten Status in einem Clone merken
    this._log.push(JSON.parse(JSON.stringify(
      this._log.length === 0 ? this.state : newState
    )));
    this.setState(newState);
  }

  componentDidMount() {
    document.onkeydown = function (e) {
      if(e.altKey && e.shiftKey && e.keyCode === 82) {
        //ALT+SHIFT+R(eplay)
        this._replay();
      }
    }.bind(this);
  }

  _replay() {
    if (this._log.length === 0) {
      return;
    }
    var idx = -1;
    var interval = setInterval(function () {
      idx++;
      if(idx === this._log.length -1 ) { //Ende
        clearInterval(interval);
      }
      this.setState(this._log[idx]);
    }.bind(this), 1000);
  }

  _renderTable() {
    return (
      <table>
        <thead onClick={this._sort}>
          <tr>
            {
              this.props.headers.map(function(title, idx) {
                if(this.state.sortby === idx) {
                  title += this.state.descending ? '\u2191' : '\u2193';
                }
                return (<th key={idx}>{title}</th>);
              }, this)
            }
          </tr>
        </thead>
        <tbody onDoubleClick={this._showEditor}>
          {this._renderSearch()}
          {
            this.state.data.map(function (row, rowidx) {
              return (
                <tr key={rowidx}>
                  {
                    row.map(function (cell, idx) {
                      var content = cell;
                      var edit = this.state.edit;
                      if(edit && edit.row === rowidx && edit.cell === idx) {
                        content =
                          <td key={idx} data-row={rowidx}>
                            <form onSubmit={this._save}>
                              <input type="text" defaultValue={content} />
                            </form>
                          </td>
                        ;
                      }
                      return (<td key={idx} data-row={rowidx}>{content}</td>);
                    }, this)
                  }
                </tr>
              );
            }, this)
          }
        </tbody>
      </table>
    );
  }

  render() {
    return (
      <div className="Excel">
        {this._renderToolbar()}
        {this._renderTable()}
      </div>
    );
  }
}

Excel.propTypes = {
  headers: PropTypes.arrayOf(
    PropTypes.string
  ),
  initialData: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.string
    )
  )
};

export default Excel;
