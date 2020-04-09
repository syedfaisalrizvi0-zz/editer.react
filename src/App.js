import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {
  AddCircle,
  FormatAlignCenter,
  FormatAlignLeft,
  FormatAlignRight,
  ArrowDownward,
  EditRounded,
  LinkRounded,
  ImageRounded,
  CodeRounded,
  FormatSizeRounded,
  DeleteOutlineRounded,
  KeyboardArrowRightRounded,
  FormatItalicRounded,
  FormatBoldRounded,
  FormatUnderlinedRounded,
  FormatListBulletedRounded,
  FormatListNumberedRounded,
  ColorLensRounded,
  ExitToAppRounded
} from "@material-ui/icons";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import "./styles.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Collapse from "@material-ui/core/Collapse";
import { CompactPicker } from "react-color";
import DrawerLeft from "./Drawer";
import socketIO from "socket.io-client";
export default class Apps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      main: [
        {
          key: 1,
          data: [
            {
              key: "_dkfhdsghf2",
              type: "h1",
              value: "Testing Title",
              justify: "center",
              style: {
                fontSize: "",
                fontFamily: "Shadows Into Light",
                color: ""
              }
            }
          ],
          style: { textAlign: "center" }
        }
      ],
      Popper: {
        style: {
          top: "",
          left: "",
          background: "beige",
          width: "150px",
          boxShadow: "-1px 10px 16px -10px #000000",
          display: "none",
          position: "absolute"
        }
      },
      headingCollapse: {
        open: false
      },
      mainpaper: {
        icon: "right",
        style: {}
      },
      drawer: false,
      toolBar: {
        fontFamily: {
          value: [
            {
              name: "Liu Jian Mao Cao"
            },
            {
              name: "Roboto Mono"
            },
            {
              name: "Barlow Condensed"
            },
            {
              name: "Shadows Into Light"
            },
            {
              name: "Comfortaa"
            },
            {
              name: "Cairo"
            },
            {
              name: "Amatic SC"
            }
          ],
          style: {},
          default: ""
        },
        fontSize: {
          value: [
            {
              name: "small",
              value: 10
            },
            {
              name: "Normal",
              value: 15
            },
            {
              name: "large",
              value: 20
            },
            {
              name: "huge",
              value: 25
            }
          ],
          style: {},
          default: ""
        },
        formatter: [
          {
            name: "italic",
            style: { fill: "" }
          },
          {
            name: "underscore",
            style: { fill: "" }
          },
          {
            name: "bold",
            style: { fill: "" }
          },
          {
            name: "colorPicker",
            style: {
              open: false
            }
          },
          {
            name: "listBullet",
            style: { fill: "" }
          },
          {
            name: "listNumber",
            style: { fill: "" }
          },
          {
            name: "formatLeft",
            style: { fill: "" }
          },
          {
            name: "formatCenter",
            style: { fill: "" }
          },
          {
            name: "formatRight",
            style: { fill: "" }
          },
          {
            name: "link",
            style: { fill: "" }
          },
          {
            name: "image",
            style: { fill: "" }
          },
          {
            name: "code",
            style: { fill: "" }
          }
        ]
      },
      onlineUsers: [
        {
          id: "dhjdddhdh",
          name: "Ifff Rizvi",
          color: "green"
        },
        {
          id: "dhjdhdh",
          name: "B Rizvi",
          color: "black"
        },
        {
          id: "dhjdddhdh",
          name: "C Rizvi",
          color: "blue"
        }
      ]
    };
    this.tamp = this.state.main;
    this.add_div = this.add_div.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handlePopper = this.handlePopper.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.add_block = this.add_block.bind(this);
    this.handleCollapse = this.handleCollapse.bind(this);
    this.handleDrawer = this.handleDrawer.bind(this);
    this.handleColorPicker = this.handleColorPicker.bind(this);
    this.changeColor = this.changeColor.bind(this);
    this.lockdown = this.lockdown.bind(this);
    this.lockup = this.lockup.bind(this);
    this.pindex = 0;
    this.index = 0;
    this.messagesEndRef = React.createRef();
    this.socket = "";
  }
  componentDidMount() {
    document.getElementsByClassName("lds-ripple")[0].remove();
    let endpoint = "https://0ubd8.sse.codesandbox.io/8080";
    this.socket = socketIO(endpoint);
    this.socket.on("message", data => {
      alert(data);
    });
  }
  handleFonts(name) {}
  getData() {
    return this.state.main;
  }
  lockdown(data, user) {
    let id = "child-" + data.pindex + "-" + data.index;
    let dd = document.getElementById(id);
    dd.style.backgroundImage =
      "linear-gradient(to right, white, " + user.color + " 95%)";
  }
  lockup(data) {
    let id = "child-" + data.pindex + "-" + data.index;
    let dd = document.getElementById(id);
    dd.style.backgroundImage = "";
  }
  uuid() {
    return (
      "_" +
      Math.random()
        .toString(36)
        .substr(2, 9)
    );
  }
  add_div(pindex = false, index = false) {
    let item = {
      key: "_dkfhdsgsdsdhf2",
      type: "p",
      value: "start typing",
      justify: "center",
      style: {
        fontSize: "",
        fontFamily: "Shadows Into Light",
        color: ""
      }
    };
    let id = "child-" + this.pindex + "-" + (parseInt(this.index, 10) + 1);
    this.tamp[this.pindex].data.splice(this.index + 1, 0, item);
    this.setState({ main: this.tamp }, () => {
      window.scrollTo(0, document.getElementById(id));
      this.handleFocus(this.pindex, this.index + 1, id);
    });
  }
  add_block(pindex = false, index = false) {
    let tamp = this.state.main;
    tamp.push({
      data: [
        {
          key: "_dkfhdsgsdsdhf2",
          type: "h1",
          value: "New Title",
          justify: "center",
          style: {
            fontSize: "",
            fontFamily: "",
            color: ""
          }
        }
      ],
      style: { textAlign: "center" }
    });
    this.setState({ main: tamp });
    this.scrollToMyRef();
  }
  scrollToMyRef() {
    window.scrollTo(0, this.messagesEndRef);
  }
  get_focus() {
    console.log(this);
  }
  handleChange(parentKey, key, e) {
    if (e.key === "Enter") {
      e.preventDefault();
      this.add_div();
      return true;
    }
    this.socket.emit("message", "sssss");
    this.tamp[parentKey].data[key].value = e.target.innerHTML;
    this.props.handleChange(this.tamp);
  }
  handlePopper(index, event) {
    let ee = event.currentTarget;
    let p = ee.getBoundingClientRect();
    let open = this.state.Popper.style.display;
    let display = "";
    if (open === "block") {
      display = "none";
    } else {
      display = "block";
    }
    this.setState({
      Popper: {
        style: {
          top: p.top + "px",
          left: p.left - 5 + "px",
          background: "beige",
          width: "150px",
          boxShadow: "-1px 10px 16px -10px #000000",
          display: display,
          position: "absolute",
          zIndex: "999"
        }
      }
    });
  }
  handleFocus(pindex, index, key) {
    if (this.state.main[this.pindex].data[this.index].value.length < 1) {
      this.tamp = this.state.main;
      this.tamp[this.pindex].data[this.index].splice(this, index, 1);
      this.setState({
        main: this.tamp
      });
    }
    this.pindex = pindex;
    this.index = index;
    /* SETIING UP TOOLBAR  */
    /**/
    /* END SETTING UP TOOLBAR*/
    var all = document.getElementsByClassName("icon");
    for (let i = 0; i < all.length; i++) {
      all[i].style.display = "none";
    }
    this.setState({
      main: this.tamp
    });
    let el = document.getElementById(key);
    el.parentNode.parentNode.firstChild.style.display = "block";
    //el.style.backgroundImage = "linear-gradient(-90deg, red, white)";
    el.focus();
    let data = this.tamp[pindex].data[index];
    let toolBarTampState = this.state.toolBar;
    toolBarTampState.fontFamily.default = data.style.fontFamily;
    toolBarTampState.fontSize.default = data.style.fontSize;
    if (data.justify === "flex-start") {
      toolBarTampState.formatter[5].style.fill = "blue";
    } else if (data.justify === "center") {
      toolBarTampState.formatter[6].style.fill = "blue";
    } else if (data.justify === "flex-end") {
      toolBarTampState.formatter[7].style.fill = "blue";
    }
    this.setState({
      toolBar: toolBarTampState
    });
  }
  handleUpdate(ele) {
    if (Object.keys(ele)[0] === "justify") {
      this.tamp[this.pindex].data[this.index].justify = ele.justify;
    } else if (Object.keys(ele)[0] === "type") {
      this.tamp[this.pindex].data[this.index].type = ele.type;
    } else if (Object.keys(ele)[0] === "delete") {
      this.tamp[this.pindex].data.splice(this.index, 1);
    } else if (Object.keys(ele)[0] === "fontSize") {
      console.log(ele.fontSize);
      this.tamp[this.pindex].data[this.index].style.fontSize = ele.fontSize;
    }
    this.setState(
      {
        main: this.tamp,
        Popper: {
          style: {
            display: "none"
          }
        }
      },
      () => {
        console.log(this.state.main[this.pindex].data[this.index].style);
      }
    );
  }
  handleCollapse(which) {
    console.log(which);
    if (which === "headingCollapse") {
      this.setState({
        headingCollapse: {
          open: !this.state.headingCollapse.open
        }
      });
    }
  }
  handleDrawer() {
    let isopen = this.state.drawer;
    if (isopen) {
      this.setState({
        mainpaper: {
          icon: "right",
          style: {}
        },
        drawer: false
      });
    } else {
      this.setState({
        mainpaper: {
          icon: "left",
          style: {
            width: `calc(100% - 270px)`,
            marginLeft: 240
          }
        },
        drawer: true
      });
    }
  }
  handleDrawerClick(pindex) {
    let el = document.getElementById(pindex);
    window.scrollTo(0, el);
    el.style.boxShadow = "0px 6px 12px -4px rgba(0,0,0,0.75)";
    el.className = "shake";
    el.style.backgroundColor = "#ffe6e6";
    setTimeout(() => {
      el.style.boxShadow = "";
      el.className = "";
      el.style.backgroundColor = "";
    }, 3000);
  }
  handleColorPicker() {
    let formatter = this.state.toolBar.formatter;
    formatter[3].style.open = !this.state.toolBar.formatter[3].style.open;
    this.setState({
      formatter: formatter
    });
  }
  changeColor(color, event) {
    let tamp = this.state.main;
    tamp[this.pindex].data[this.index].style.color = color.hex;
    this.setState(
      {
        main: tamp
      },
      () => {
        console.log(this.state.main[this.pindex].data[this.index].style);
      }
    );
  }
  generateTable(data, attr) {
    const table = document.createElement("table");
    table.setAttribute("id", attr.id);
    const header = document.createElement("tr");
    const keys = Object.keys(data[0]);
    for (const key of keys) {
      const th = document.createElement("th");
      th.appendChild(document.createTextNode(key));
      header.appendChild(th);
    }
    table.appendChild(header);
    const len = data.length;
    for (const row of data) {
      const tr = document.createElement("tr");
      for (const key of keys) {
        const td = document.createElement("td");
        const content = row[key] || "";
        td.appendChild(document.createTextNode(content));
        tr.appendChild(td);
        delete row[key];
      }
      for (const key in row) {
        const th = document.createElement("th");
        th.appendChild(document.createTextNode(key));
        keys.push(key);
        header.appendChild(th);
        const td = document.createElement("td");
        const content = row[key] || "";
        const input = document.createElement("input");
        input.value = content;
        input.addEventListener("onchange", this.handleUpdateCharts);
        td.appendChild(input);
        tr.appendChild(td);
      }
      table.appendChild(tr);
    }
    return table;
  }
  handleChartEdit(data) {
    let editEl = document.getElementById(
      "chart-grid-" + data.pindex + "-" + data.index
    ).parentNode.firstChild;
    console.log(editEl);
    editEl.appendChild(
      this.generateTable(data.data, {
        id: "chart-table-" + data.pindex + "-" + data.index
      })
    );
  }
  render() {
    return (
      <div>
        <DrawerLeft
          data={this.state.main}
          onlineUsers={this.state.onlineUsers}
          open={this.state.drawer}
          handleDrawerClick={e => {
            this.handleDrawerClick(e);
          }}
        />
        <Paper style={this.state.mainpaper.style}>
          <Grid container justify="center" spacing={2}>
            <Grid item>
              <span onClick={this.handleDrawer}>
                <KeyboardArrowRightRounded fontSize="small" />
              </span>
            </Grid>
            <Grid item>
              <Select
                native
                value={12}
                onChange={e => {
                  this.handleFonts(e.target.value);
                }}
                className="toolbar-select"
              >
                {this.state.toolBar.fontFamily.value.map(ele => {
                  return (
                    <option value={ele.name} style={{ fontFamily: ele.name }}>
                      {ele.name}
                    </option>
                  );
                })}
              </Select>
            </Grid>
            <Grid item>
              <Select
                native
                value={12}
                onChange={e => {
                  this.handleUpdate({ fontSize: e.target.value });
                }}
                className="toolbar-select"
              >
                {this.state.toolBar.fontSize.value.map(ele => {
                  return (
                    <option value={ele.value} style={{ fontSize: ele.value }}>
                      {ele.name}
                    </option>
                  );
                })}
              </Select>
            </Grid>
            {this.state.toolBar.formatter.map(ele => {
              if (ele.name === "italic") {
                return (
                  <Grid
                    item
                    onClick={() => {
                      this.handleUpdate({});
                    }}
                  >
                    <FormatItalicRounded style={ele.style} />
                  </Grid>
                );
              } else if (ele.name === "bold") {
                return (
                  <Grid
                    item
                    onClick={() => {
                      this.handleUpdate({});
                    }}
                  >
                    <FormatBoldRounded style={ele.style} />
                  </Grid>
                );
              } else if (ele.name === "colorPicker") {
                if (this.state.toolBar.formatter[3].style.open) {
                  return (
                    <Grid
                      item
                      onClick={() => {
                        this.handleColorPicker();
                      }}
                    >
                      <ColorLensRounded style={{ fill: "blue" }} />
                      <CompactPicker
                        onChange={this.changeColor}
                        style={{
                          position: "absolute",
                          display: "inline-block",
                          marginTop: "28px",
                          marginLeft: "-137px"
                        }}
                      />
                    </Grid>
                  );
                } else {
                  return (
                    <Grid
                      item
                      onClick={() => {
                        this.handleColorPicker();
                      }}
                    >
                      <ColorLensRounded />
                    </Grid>
                  );
                }
              } else if (ele.name === "underscore") {
                return (
                  <Grid
                    item
                    onClick={() => {
                      this.handleUpdate({});
                    }}
                  >
                    <FormatUnderlinedRounded style={ele.style} />
                  </Grid>
                );
              } else if (ele.name === "listBullet") {
                return (
                  <Grid
                    item
                    onClick={() => {
                      this.handleUpdate({});
                    }}
                  >
                    <FormatListBulletedRounded style={ele.style} />
                  </Grid>
                );
              } else if (ele.name === "listNumber") {
                return (
                  <Grid
                    item
                    onClick={() => {
                      this.handleUpdate({});
                    }}
                  >
                    <FormatListNumberedRounded style={ele.style} />
                  </Grid>
                );
              } else if (ele.name === "formatLeft") {
                return (
                  <Grid
                    item
                    onClick={() => {
                      this.handleUpdate({ justify: "flex-start" });
                    }}
                  >
                    <FormatAlignLeft style={ele.style} />
                  </Grid>
                );
              } else if (ele.name === "formatCenter") {
                return (
                  <Grid
                    item
                    onClick={() => {
                      this.handleUpdate({ justify: "center" });
                    }}
                  >
                    <FormatAlignCenter style={ele.style} />
                  </Grid>
                );
              } else if (ele.name === "formatRight") {
                return (
                  <Grid
                    item
                    onClick={() => {
                      this.handleUpdate({ justify: "flex-end" });
                    }}
                  >
                    <FormatAlignRight style={ele.style} />
                  </Grid>
                );
              } else if (ele.name === "link") {
                return (
                  <Grid
                    item
                    onClick={() => {
                      this.handleUpdate({});
                    }}
                  >
                    <LinkRounded style={ele.style} />
                  </Grid>
                );
              } else if (ele.name === "image") {
                return (
                  <Grid
                    item
                    onClick={() => {
                      this.handleUpdate({});
                    }}
                  >
                    <ImageRounded style={ele.style} />
                  </Grid>
                );
              }
            })}
          </Grid>
          <div style={this.state.Popper.style}>
            <List>
              <ListItem
                button
                onClick={() => {
                  this.handleCollapse("headingCollapse");
                }}
              >
                <ListItemIcon>
                  <FormatSizeRounded />
                </ListItemIcon>
                <ListItemText primary="TypoGraphy" />
              </ListItem>
              <Collapse in={this.state.headingCollapse.open}>
                <List componant="nav">
                  {["h1", "h2", "h3", "h4", "h5", "h6", "p"].map(ele => {
                    return (
                      <ListItem
                        button
                        onClick={() => {
                          this.handleUpdate({ type: ele });
                        }}
                      >
                        {ele}
                      </ListItem>
                    );
                  })}
                </List>
              </Collapse>
            </List>
          </div>
          {this.state.main.map((ele, pindex) => {
            return (
              <div
                className="p_item"
                id={pindex}
                key={pindex}
                style={ele.style}
              >
                {ele.data.map((fle, index) => {
                  if (fle.type === "h1") {
                    return (
                      <Grid container justify={fle.justify}>
                        <Grid
                          item
                          className="icon"
                          style={{
                            marginTop: "11px",
                            paddingRight: "4px",
                            display: "none"
                          }}
                          onClick={e => {
                            this.handlePopper(index, e);
                          }}
                        >
                          <AddCircle />
                        </Grid>
                        <Grid item>
                          <h1
                            className="children"
                            contentEditable={true}
                            suppressContentEditableWarning={true}
                            id={"child-" + pindex + "-" + index}
                            key={pindex + index}
                            onKeyPress={e => {
                              this.handleChange(pindex, index, e);
                            }}
                            onFocus={e => {
                              this.handleFocus(
                                pindex,
                                index,
                                "child-" + pindex + "-" + index
                              );
                            }}
                            style={fle.style}
                          >
                            {fle.value}
                          </h1>
                        </Grid>
                      </Grid>
                    );
                  } else if (fle.type === "h2") {
                    return (
                      <Grid container justify={fle.justify}>
                        <Grid
                          item
                          className="icon"
                          style={{
                            marginTop: "11px",
                            paddingRight: "4px",
                            display: "none"
                          }}
                          onClick={e => {
                            this.handlePopper(index, e);
                          }}
                        >
                          <AddCircle />
                        </Grid>
                        <Grid item>
                          <h2
                            className="children"
                            contentEditable={true}
                            suppressContentEditableWarning={true}
                            id={"child-" + pindex + "-" + index}
                            key={pindex + index}
                            onKeyPress={e => {
                              this.handleChange(pindex, index, e);
                            }}
                            onFocus={e => {
                              this.handleFocus(
                                pindex,
                                index,
                                "child-" + pindex + "-" + index
                              );
                            }}
                            style={fle.style}
                          >
                            {fle.value}
                          </h2>
                        </Grid>
                      </Grid>
                    );
                  } else if (fle.type === "h3") {
                    return (
                      <Grid container justify={fle.justify}>
                        <Grid
                          item
                          className="icon"
                          style={{
                            marginTop: "11px",
                            paddingRight: "4px",
                            display: "none"
                          }}
                          onClick={e => {
                            this.handlePopper(index, e);
                          }}
                        >
                          <AddCircle />
                        </Grid>
                        <Grid item>
                          <h3
                            className="children"
                            contentEditable={true}
                            suppressContentEditableWarning={true}
                            id={"child-" + pindex + "-" + index}
                            key={pindex + index}
                            onKeyPress={e => {
                              this.handleChange(pindex, index, e);
                            }}
                            onFocus={e => {
                              this.handleFocus(
                                pindex,
                                index,
                                "child-" + pindex + "-" + index
                              );
                            }}
                            style={fle.style}
                          >
                            {fle.value}
                          </h3>
                        </Grid>
                      </Grid>
                    );
                  } else if (fle.type === "h4") {
                    return (
                      <Grid container justify={fle.justify}>
                        <Grid
                          item
                          className="icon"
                          style={{
                            marginTop: "11px",
                            paddingRight: "4px",
                            display: "none"
                          }}
                          onClick={e => {
                            this.handlePopper(index, e);
                          }}
                        >
                          <AddCircle />
                        </Grid>
                        <Grid item>
                          <h4
                            className="children"
                            contentEditable={true}
                            suppressContentEditableWarning={true}
                            id={"child-" + pindex + "-" + index}
                            key={pindex + index}
                            onKeyPress={e => {
                              this.handleChange(pindex, index, e);
                            }}
                            onFocus={e => {
                              this.handleFocus(
                                pindex,
                                index,
                                "child-" + pindex + "-" + index
                              );
                            }}
                            style={fle.style}
                          >
                            {fle.value}
                          </h4>
                        </Grid>
                      </Grid>
                    );
                  } else if (fle.type === "h5") {
                    return (
                      <Grid container justify={fle.justify}>
                        <Grid
                          item
                          className="icon"
                          style={{
                            marginTop: "11px",
                            paddingRight: "4px",
                            display: "none"
                          }}
                          onClick={e => {
                            this.handlePopper(index, e);
                          }}
                        >
                          <AddCircle />
                        </Grid>
                        <Grid item>
                          <h5
                            className="children"
                            contentEditable={true}
                            suppressContentEditableWarning={true}
                            id={"child-" + pindex + "-" + index}
                            key={pindex + index}
                            onKeyPress={e => {
                              this.handleChange(pindex, index, e);
                            }}
                            onFocus={e => {
                              this.handleFocus(
                                pindex,
                                index,
                                "child-" + pindex + "-" + index
                              );
                            }}
                            style={fle.style}
                          >
                            {fle.value}
                          </h5>
                        </Grid>
                      </Grid>
                    );
                  } else if (fle.type === "h6") {
                    return (
                      <Grid container justify={fle.justify}>
                        <Grid
                          item
                          className="icon"
                          style={{
                            marginTop: "11px",
                            paddingRight: "4px",
                            display: "none"
                          }}
                          onClick={e => {
                            this.handlePopper(index, e);
                          }}
                        >
                          <AddCircle />
                        </Grid>
                        <Grid item>
                          <h6
                            className="children"
                            contentEditable={true}
                            suppressContentEditableWarning={true}
                            id={"child-" + pindex + "-" + index}
                            key={pindex + index}
                            onKeyPress={e => {
                              this.handleChange(pindex, index, e);
                            }}
                            onFocus={e => {
                              this.handleFocus(
                                pindex,
                                index,
                                "child-" + pindex + "-" + index
                              );
                            }}
                            style={fle.style}
                          >
                            {fle.value}
                          </h6>
                        </Grid>
                      </Grid>
                    );
                  } else if (fle.type === "p") {
                    return (
                      <Grid container justify={fle.justify}>
                        <Grid
                          item
                          className="icon"
                          style={{
                            marginTop: "11px",
                            paddingRight: "4px",
                            display: "none"
                          }}
                          onClick={e => {
                            this.handlePopper(index, e);
                          }}
                        >
                          <AddCircle />
                        </Grid>
                        <Grid item>
                          <p
                            className="children"
                            contentEditable={true}
                            spellcheck={false}
                            suppressContentEditableWarning={true}
                            id={"child-" + pindex + "-" + index}
                            key={pindex + index}
                            onKeyPress={e => {
                              this.handleChange(pindex, index, e);
                            }}
                            onFocus={e => {
                              this.handleFocus(
                                pindex,
                                index,
                                "child-" + pindex + "-" + index
                              );
                            }}
                            style={fle.style}
                          >
                            {fle.value}
                          </p>
                        </Grid>
                      </Grid>
                    );
                  } else if (fle.type === "chart") {
                    return (
                      <Grid container justify={fle.justify}>
                        <Grid
                          item
                          className="icon"
                          style={{
                            marginTop: "11px",
                            paddingRight: "4px",
                            display: "block"
                          }}
                        >
                          <EditRounded
                            onClick={e => {
                              this.handleChartEdit({
                                pindex: pindex,
                                index: index,
                                data: fle.value
                              });
                            }}
                          />
                        </Grid>
                        <Grid id={"chart-grid-" + pindex + "-" + index} item>
                          <LineChart
                            width={500}
                            height={300}
                            data={fle.value}
                            margin={{
                              top: 5,
                              right: 30,
                              left: 20,
                              bottom: 5
                            }}
                          >
                            <XAxis dataKey="name" />
                            <YAxis />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip />
                            <Legend />
                            <Line
                              type="monotone"
                              dataKey="pv"
                              stroke="#8884d8"
                              activeDot={{ r: 8 }}
                            />
                            <Line
                              type="monotone"
                              dataKey="uv"
                              stroke="#82ca9d"
                            />
                          </LineChart>
                        </Grid>
                      </Grid>
                    );
                  }
                })}
              </div>
            );
          })}
          <BottomNavigation onClick={this.add_block}>
            <BottomNavigationAction icon={<ArrowDownward />} />
          </BottomNavigation>
          <div
            style={{ float: "left", clear: "both" }}
            ref={el => {
              this.messagesEndRef = el;
            }}
          />
          <script async src="//jsfiddle.net/syedfaisalrizvi0/hzg2j89d/embed/" />
        </Paper>
      </div>
    );
  }
}
