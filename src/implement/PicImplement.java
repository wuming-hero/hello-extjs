package implement;

import java.sql.*;
import java.util.ArrayList;

import db.DBConn;

import pojo.Pic;

public class PicImplement {
	
	public ArrayList<Pic> queryPic(){
		
		ArrayList<Pic> pics = new ArrayList<Pic>();
		
		Connection con =null;
		PreparedStatement pre = null;
		ResultSet rs = null;
		DBConn conns = new DBConn();
		con = conns.getConnection();
		try {
			pre = con.prepareStatement("select * from pic order by sortId");
			rs = pre.executeQuery();
			while(rs.next()) {
				Pic pic = new Pic();
				pic.setPicId(rs.getInt("picId"));
				pic.setPicName(rs.getString("picName"));
				pic.setPicPath(rs.getString("picPath"));
				pic.setSortId(rs.getInt("sortId"));
				pics.add(pic);
			}
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally {
			try {
				con.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		
		
		return pics;
		
	}
public void updateSort(int sortId,String picId){
		
		Connection con =null;
		PreparedStatement pre = null;
		ResultSet rs = null;
		DBConn conns = new DBConn();
		con = conns.getConnection();
		try {
			pre = con.prepareStatement("update pic set sortId = ? where picId = ?");
			pre.setInt(1,sortId);
			pre.setString(2,picId);
			pre.execute();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally {
			try {
				con.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}

}
