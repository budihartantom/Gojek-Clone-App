import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TextInput } from 'react-native';

export default class App extends Component {
	render() {
		return (
			<View style={{ flex: 1 }}>
				<View style={{ flex: 1, backgroundColor: 'white' }}>
					{/* search bar */}
					<View
						style={{
							marginHorizontal: 17,
							flexDirection: 'row',
							paddingTop: 15
						}}
					>
						<View style={{ position: 'relative', flex: 1 }}>
							<TextInput
								placeholder="Cari apa di Shopalover?"
								style={{
									borderWidth: 1,
									borderColor: '#E8E8E8',
									borderRadius: 5,
									height: 35,
									fontSize: 13,
									paddingLeft: 45,
									paddingRight: 20,
									backgroundColor: '#f0f0f0',
									marginRight: 18
								}}
							/>
							<Image
								source={require('./icon/search.png')}
								style={{ position: 'absolute', top: 5, left: 12 }}
							/>
						</View>
						<View
							style={{
								width: 35,
								alignItems: 'center',
								justifyContent: 'center'
							}}
						>
							<Image source={require('./icon/icon6.png')} />
						</View>
						<View
							style={{
								width: 35,
								alignItems: 'center',
								justifyContent: 'center'
							}}
						>
							<Image source={require('./icon/icon7.png')} />
						</View>
					</View>
					{/* gopay */}
					<View style={{ marginHorizontal: 17, marginTop: 8 }}>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'space-between',
								backgroundColor: '#ffffff',
								borderTopLeftRadius: 4,
								borderTopRightRadius: 4,
								padding: 14
							}}
						>
							<Image source={require('./icon/blank.png')} />
							<Text style={{ fontSize: 17, fontWeight: 'bold', color: 'white' }}>Rp 50.000</Text>
						</View>
						<View
							style={{
								flexDirection: 'row',
								paddingTop: 20,
								paddingBottom: 14,
								backgroundColor: '#fffbc4',
								borderBottomLeftRadius: 4,
								borderBottomRightRadius: 4
							}}
						>
							<View style={{ flex: 1, alignItems: 'center' }}>
								<Image source={require('./icon/wear9.png')} />
								<Text style={{ fontSize: 17, fontWeight: 'bold', color: 'black' }}>
									Layanan Pengiriman
								</Text>
								<Text style={{ fontSize: 17, color: 'black' }}>
									Sorabel tetap melayani pengiriman selama pandemi, kecuali daerah tertentu. Cek
									selengkapnya di sini.
								</Text>
							</View>
						</View>
					</View>
					{/* main feature */}
					<View
						style={{
							flexDirection: 'row',
							flexWrap: 'wrap',
							marginTop: 18
						}}
					>
						<View
							style={{
								justifyContent: 'space-between',
								flexDirection: 'row',
								width: '100%',
								marginBottom: 18
							}}
						>
							<View
								style={{
									width: '25%',
									alignItems: 'center'
								}}
							>
								<View
									style={{
										width: 49,
										height: 49,
										borderWidth: 1,
										borderColor: '#EFEFEF',
										backgroundColor: '#f0f0f0',
										borderRadius: 27,
										justifyContent: 'center',
										alignItems: 'center'
									}}
								>
									<Image source={require('./icon/wear10.png')} />
								</View>
								<Text
									style={{
										fontSize: 11,
										fontWeight: 'bold',
										textAlign: 'center',
										marginTop: 6
									}}
								>
									DRESS MUSLIM
								</Text>
								<Text
									style={{
										fontSize: 11,
										fontWeight: 'bold',
										textAlign: 'center',
										marginTop: 6
									}}
								>
									119RB
								</Text>
							</View>
							<View
								style={{
									width: '25%',
									alignItems: 'center'
								}}
							>
								<View
									style={{
										width: 49,
										height: 49,
										borderWidth: 1,
										borderColor: '#EFEFEF',
										backgroundColor: '#ffffff',
										borderRadius: 27,
										justifyContent: 'center',
										alignItems: 'center'
									}}
								>
									<Image source={require('./icon/wear11.png')} />
								</View>
								<Text
									style={{
										fontSize: 11,
										fontWeight: 'bold',
										textAlign: 'center',
										marginTop: 6
									}}
								>
									SHOECO DISKON
								</Text>
								<Text
									style={{
										fontSize: 11,
										fontWeight: 'bold',
										textAlign: 'center',
										marginTop: 6
									}}
								>
									50%
								</Text>
							</View>
							<View
								style={{
									width: '25%',
									alignItems: 'center'
								}}
							>
								<View
									style={{
										width: 49,
										height: 49,
										borderWidth: 1,
										borderColor: '#ffffff',
										backgroundColor: '#ffffff',
										borderRadius: 27,
										justifyContent: 'center',
										alignItems: 'center'
									}}
								>
									<Image source={require('./icon/wear12.png')} />
								</View>
								<Text
									style={{
										fontSize: 11,
										fontWeight: 'bold',
										textAlign: 'center',
										marginTop: 6
									}}
								>
									LUIRE DISKON
								</Text>
								<Text
									style={{
										fontSize: 11,
										fontWeight: 'bold',
										textAlign: 'center',
										marginTop: 6
									}}
								>
									80%
								</Text>
							</View>
							<View
								style={{
									width: '25%',
									alignItems: 'center'
								}}
							>
								<View
									style={{
										width: 69,
										height: 69,
										borderWidth: 1,
										borderColor: '#28524e',
										backgroundColor: '#28524e',
										borderRadius: 48,
										justifyContent: 'center',
										alignItems: 'center'
									}}
								>
									<Image source={require('./icon/wear13.png')} />
								</View>
								<Text
									style={{
										fontSize: 11,
										fontWeight: 'bold',
										textAlign: 'center',
										marginTop: 6
									}}
								>
									PROMO SPESIAL
								</Text>
								<Text
									style={{
										fontSize: 11,
										fontWeight: 'bold',
										textAlign: 'center',
										marginTop: 6
									}}
								>
									RAMADAN
								</Text>
							</View>
						</View>

						<View
							style={{
								justifyContent: 'space-between',
								flexDirection: 'row',
								width: '100%',
								marginBottom: 18
							}}
						>
							<View
								style={{
									width: '25%',
									alignItems: 'center'
								}}
							>
								<View
									style={{
										width: 49,
										height: 49,
										borderWidth: 1,
										borderColor: '#EFEFEF',
										backgroundColor: '#f0f0f0',
										borderRadius: 27,
										justifyContent: 'center',
										alignItems: 'center'
									}}
								>
									<Image source={require('./icon/wear1.png')} />
								</View>
								<Text
									style={{
										fontSize: 11,
										fontWeight: 'bold',
										textAlign: 'center',
										marginTop: 6
									}}
								>
									WANITA
								</Text>
							</View>
							<View
								style={{
									width: '25%',
									alignItems: 'center'
								}}
							>
								<View
									style={{
										width: 49,
										height: 49,
										borderWidth: 1,
										borderColor: '#EFEFEF',
										backgroundColor: '#f0f0f0',
										borderRadius: 27,
										justifyContent: 'center',
										alignItems: 'center'
									}}
								>
									<Image source={require('./icon/wear2.png')} />
								</View>
								<Text
									style={{
										fontSize: 11,
										fontWeight: 'bold',
										textAlign: 'center',
										marginTop: 6
									}}
								>
									MUSLIM-WEAR
								</Text>
							</View>
							<View
								style={{
									width: '25%',
									alignItems: 'center'
								}}
							>
								<View
									style={{
										width: 49,
										height: 49,
										borderWidth: 1,
										borderColor: '#EFEFEF',
										backgroundColor: '#f0f0f0',
										borderRadius: 27,
										justifyContent: 'center',
										alignItems: 'center'
									}}
								>
									<Image source={require('./icon/wear3.png')} />
								</View>
								<Text
									style={{
										fontSize: 11,
										fontWeight: 'bold',
										textAlign: 'center',
										marginTop: 6
									}}
								>
									BIG-SIZE
								</Text>
							</View>
							<View
								style={{
									width: '25%',
									alignItems: 'center'
								}}
							>
								<View
									style={{
										width: 49,
										height: 49,
										borderWidth: 1,
										borderColor: '#EFEFEF',
										backgroundColor: '#f0f0f0',
										borderRadius: 27,
										justifyContent: 'center',
										alignItems: 'center'
									}}
								>
									<Image source={require('./icon/wear4.png')} />
								</View>
								<Text
									style={{
										fontSize: 11,
										fontWeight: 'bold',
										textAlign: 'center',
										marginTop: 6
									}}
								>
									IBU DAN ANAK
								</Text>
							</View>
						</View>

						<View
							style={{
								justifyContent: 'space-between',
								flexDirection: 'row',
								width: '100%'
							}}
						>
							<View
								style={{
									width: '25%',
									alignItems: 'center'
								}}
							>
								<View
									style={{
										width: 49,
										height: 49,
										borderWidth: 1,
										borderColor: '#EFEFEF',
										backgroundColor: '#f0f0f0',
										borderRadius: 27,
										justifyContent: 'center',
										alignItems: 'center'
									}}
								>
									<Image source={require('./icon/wear5.png')} />
								</View>
								<Text
									style={{
										fontSize: 11,
										fontWeight: 'bold',
										textAlign: 'center',
										marginTop: 6
									}}
								>
									KOSMETIK
								</Text>
							</View>
							<View
								style={{
									width: '25%',
									alignItems: 'center'
								}}
							>
								<View
									style={{
										width: 49,
										height: 49,
										borderWidth: 1,
										borderColor: '#EFEFEF',
										backgroundColor: '#f0f0f0',
										borderRadius: 27,
										justifyContent: 'center',
										alignItems: 'center'
									}}
								>
									<Image source={require('./icon/wear6.png')} />
								</View>
								<Text
									style={{
										fontSize: 11,
										fontWeight: 'bold',
										textAlign: 'center',
										marginTop: 6
									}}
								>
									PRIA
								</Text>
							</View>
							<View
								style={{
									width: '25%',
									alignItems: 'center'
								}}
							>
								<View
									style={{
										width: 49,
										height: 49,
										borderWidth: 1,
										borderColor: '#EFEFEF',
										backgroundColor: '#f0f0f0',
										borderRadius: 27,
										justifyContent: 'center',
										alignItems: 'center'
									}}
								>
									<Image source={require('./icon/wear7.png')} />
								</View>
								<Text
									style={{
										fontSize: 11,
										fontWeight: 'bold',
										textAlign: 'center',
										marginTop: 6
									}}
								>
									DISKON
								</Text>
							</View>
							<View
								style={{
									width: '25%',
									alignItems: 'center'
								}}
							>
								<View
									style={{
										width: 49,
										height: 49,
										borderWidth: 1,
										borderColor: '#ffffff',
										backgroundColor: '#ffffff',
										borderRadius: 27,
										justifyContent: 'center',
										alignItems: 'center'
									}}
								>
									<Image source={require('./icon/wear8.png')} />
								</View>
								<Text
									style={{
										fontSize: 11,
										fontWeight: 'bold',
										textAlign: 'center',
										marginTop: 6
									}}
								>
									SEMUA
								</Text>
								<Text
									style={{
										fontSize: 11,
										fontWeight: 'bold',
										textAlign: 'center',
										marginTop: 6
									}}
								>
									KATEGORI
								</Text>
							</View>
						</View>
					</View>
				</View>
				<View
					style={{
						height: 54,
						flexDirection: 'row',
						backgroundColor: 'white'
					}}
				>
					<View
						style={{
							flex: 1,
							alignItems: 'center',
							justifyContent: 'center'
						}}
					>
						<Image style={{ width: 26, height: 26 }} source={require('./icon/icon1.png')} />
						<Text
							style={{
								fontSize: 10,
								color: '#545454',
								marginTop: 4,
								color: '#43AB4A'
							}}
						>
							Belanja
						</Text>
					</View>
					<View
						style={{
							flex: 1,
							alignItems: 'center',
							justifyContent: 'center'
						}}
					>
						<Image style={{ width: 26, height: 26 }} source={require('./icon/icon2.png')} />
						<Text style={{ fontSize: 10, color: '#545454', marginTop: 4 }}>Eksplor</Text>
					</View>
					<View
						style={{
							flex: 1,
							alignItems: 'center',
							justifyContent: 'center'
						}}
					>
						<Image style={{ width: 26, height: 26 }} source={require('./icon/icon3.png')} />
						<Text style={{ fontSize: 10, color: '#545454', marginTop: 4 }}>Inspirasi</Text>
					</View>
					<View
						style={{
							flex: 1,
							alignItems: 'center',
							justifyContent: 'center'
						}}
					>
						<Image style={{ width: 26, height: 26 }} source={require('./icon/icon4.png')} />
						<Text style={{ fontSize: 10, color: '#545454', marginTop: 4 }}>Keranjang</Text>
					</View>
					<View
						style={{
							flex: 1,
							alignItems: 'center',
							justifyContent: 'center'
						}}
					>
						<Image style={{ width: 26, height: 26 }} source={require('./icon/icon5.png')} />
						<Text style={{ fontSize: 10, color: '#545454', marginTop: 4 }}>Sista</Text>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({});
